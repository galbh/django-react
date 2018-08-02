# -*- coding: utf-8 -*-

from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import generics, permissions
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from backend.accounts.serializers import UserSerializer, CredentialsSerializer, UserProfileSerializer
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


def index(request):
    return render_to_response('public/index.html')


class SignUp(generics.CreateAPIView):
    """
    Register a new user
    """
    permission_classes = (permissions.AllowAny, )
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
    Authenticate
    """
    permission_classes = (permissions.AllowAny, )
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
    serializer_class = UserProfileSerializer
    queryset = UserProfile

    def get_object(self):
        obj = get_object_or_404(UserProfile, user=self.request.user)

        if obj:
            logout(self.request)
            return redirect(settings.LOGOUT_REDIRECT_URL)


# TODO: register staff user endpoint (only permitted by superuser)
# TODO: register superuser endpoint (only permitted by superuser)
# TODO: reset password endpoint
# TODO: swagger should arrange endpoint by package name (ie accounts)

# # Set super user
# if is_superuser:
#     created_user.is_superuser = True
#     created_user.is_staff = True
#
# # Set staff user
# if is_staff:
#     created_user.is_staff = True
#
# # save User instance
# created_user.save()

# @api_view(['POST'])
# @csrf_exempt
# def reset_password(request):
#     email = request.data.get('email')
#     if email:
#         user = User.objects.filter(username=email).first()
#         if user:
#             _send_email(request, user)
#             return Response(Constants.EMAIL_NOT_FOUND, status=200)
#         else:
#             return Response(Constants.ERROR_USER_NOT_FOUND, status=404)
#     else:
#         return Response(Constants.INVALID_EMAIL, status=400)
#
#
# def _send_email(request, user):
#     content = {
#         'email': user.email,
#         'domain': request.META['HTTP_HOST'],
#         'site_name': 'Gal Ben Haim',
#         'uid': urlsafe_base64_encode(force_bytes(user.pk)).decode(),
#         'user': user,
#         'token': default_token_generator.make_token(user),
#         'protocol': 'https',
#     }
#     subject_template_name = 'registration/password_reset_subject.txt'
#     email_template_name = 'registration/password_reset_email.html'
#     subject = loader.render_to_string(subject_template_name, content)
#     subject = ''.join(subject.splitlines())
#     email = loader.render_to_string(email_template_name, content)
#
#     send_mail(
#         subject=subject,
#         message='change password',
#         from_email='gal@gmail.com',
#         recipient_list=[user.email],
#         fail_silently=True,
#         html_message=email
#     )
#
#
# @csrf_exempt
# def reset_password_view(request, uidb64, token):
#     response = redirect('/accounts/')
#     response['Location'] += '#/reset-password/{}/{}'.format(uidb64, token)
#     return response
#
#
# @api_view(['POST'])
# @csrf_exempt
# def change_password(request):
#     uidb64 = request.data.get('uidb64')
#     token = request.data.get('token')
#     uid = force_text(urlsafe_base64_decode(uidb64))
#     user = User.objects.get(pk=uid)
#     is_valid = default_token_generator.check_token(user, token)
#     new_password = request.data.get('password')
#
#     if user and new_password and len(new_password) > 0 and is_valid:
#         user.set_password(new_password)
#         user.save()
#         user = authenticate(username=user.email, password=new_password)
#         auth_login(request, user)
#         return HttpResponse(Constants.LOGIN_SUCCESS, status=200)
#     else:
#         return HttpResponse('bad request', status=400)
