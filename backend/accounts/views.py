# -*- coding: utf-8 -*-
import json
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import mixins, generics, permissions
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from backend.accounts.serializers import UserSerializer, CredentialsSerializer, UserProfileSerializer, \
    RequestResetPasswordSerializer, ResetPasswordSerializer
from backend.accounts.validations import Validations
from django_react import settings
from rest_framework.response import Response
from .constants import Constants
from backend.accounts.models import UserProfile
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.http.response import HttpResponse
from django.shortcuts import redirect, get_object_or_404, render_to_response
from django.template import loader


def index(request):
    return render_to_response('public/index.html')


class SignUp(generics.CreateAPIView):
    """
    Register a new user
    """
    permission_classes = (permissions.IsAdminUser,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        password = data.get('password')
        email = data.get('email')

        if email and password:

            if not Validations().validate_email(email):
                return Response(Constants.INVALID_EMAIL, status=HTTP_400_BAD_REQUEST)

            if User.objects.filter(email=email).first():
                return Response(Constants.ERROR_USER_EXISTS, status=HTTP_400_BAD_REQUEST)

            created_user, created = User.objects.get_or_create(username=email, email=email)

            if created:
                save_user(request, created_user, password)
                return HttpResponse(Constants.USER_CREATED_SUCCESS, status=HTTP_200_OK)

        else:
            return HttpResponse(Constants.ERROR_ALL_FIELD_REQUIRED, status=HTTP_400_BAD_REQUEST)


def save_user(request, created_user, password):
    # set password safely
    created_user.set_password(password)
    created_user.save()

    # create User Profile instance
    profile = UserProfile.objects.get(user=created_user)
    profile.full_name = created_user.email
    profile.save()

    # Authenticate user
    user = authenticate(username=created_user.email, password=password)
    auth_login(request, user)


def create_user_profile(instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance, full_name=instance.username)


post_save.connect(create_user_profile, sender=User)


class Login(generics.CreateAPIView):
    """
    Authenticate - logs in user
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = CredentialsSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            auth_login(request, user)
            return Response(Constants.LOGIN_SUCCESS, status=200)
        else:
            return Response(Constants.ERROR_USER_NOT_FOUND, status=500)


class LogOut(generics.RetrieveAPIView):
    """
    Logs out user and redirects as configured in settings
    """
    serializer_class = UserProfileSerializer
    queryset = User

    def get_object(self):
        obj = get_object_or_404(User, id=self.request.user.id)

        if obj:
            logout(self.request)
            return redirect(settings.LOGOUT_REDIRECT_URL)


class RequestResetPassword(generics.CreateAPIView):
    """
    Given an email associated with user, will return json object with uidb64 and token
    """
    serializer_class = RequestResetPasswordSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(force_bytes(user.pk)).decode()
            token = default_token_generator.make_token(user)
            j = json.dumps({"responseText": Constants.CHANGE_PASSWORD_REQUEST, "uidb64": uidb64, "token": token})
            return Response(j, status=200)

        except User.DoesNotExist:
            return Response(Constants.ERROR_USER_NOT_FOUND)


class ResetPassword(mixins.RetrieveModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    serializer_class = ResetPasswordSerializer
    permission_classes = (permissions.AllowAny,)

    @staticmethod
    def get(self, *args, **kwargs):
        """
        Returns html page with href for ui router along with uidb64 and token
        """
        response = redirect('/accounts/')
        response['Location'] += '#/reset-password/{}/{}'.format(kwargs['uidb64'], kwargs['token'])
        return response

    @staticmethod
    def post(request, **kwargs):
        """
        Reset password
        """
        uidb64 = kwargs['uidb64']
        token = kwargs['token']
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
        is_valid = default_token_generator.check_token(user, token)
        new_password = request.data.get('password')

        if user and new_password and len(new_password) > 0 and is_valid:
            user.set_password(new_password)
            user.save()
            authenticate(username=user.email, password=new_password)
            auth_login(request, user)
            return Response(Constants.LOGIN_SUCCESS, status=200)
        else:
            return HttpResponse(Constants.BAD_REQUEST, status=400)


class RequestResetPasswordByEmail(generics.CreateAPIView):
    """
    Sends email with a link containing uidb64 and token for reset password confirmation.
    Make sure to set email configures in settings.py and remove this line afterwards
    """
    serializer_class = RequestResetPasswordSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User

    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.get(email=request.data.get('email'))
            content = {
                'email': user.email,
                'domain': request.META['HTTP_HOST'],
                'site_name': 'Gal Ben Haim',
                'uid': urlsafe_base64_encode(force_bytes(user.pk)).decode(),
                'user': user,
                'token': default_token_generator.make_token(user),
                'protocol': 'https',
            }

            subject_template_name = 'email/password_reset_subject.txt'
            email_template_name = 'email/password_reset_email.html'
            subject = loader.render_to_string(subject_template_name, content)
            subject = ''.join(subject.splitlines())
            email = loader.render_to_string(email_template_name, content)

            send_mail(
                subject=subject,
                message='change password',
                from_email='gal@gmail.com',
                recipient_list=[user.email],
                fail_silently=True,
                html_message=email
            )

            return Response(Constants.EMAIL_SENT_SUCCESSFULLY)

        except User.DoesNotExist:
            return Response(Constants.ERROR_USER_NOT_FOUND)


# TODO: swagger should arrange endpoint by package name (ie accounts)
