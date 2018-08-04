from backend.accounts.models import UserProfile
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('email', 'password',)


class UserProfileSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='user.id')
    username = serializers.CharField(source='user.username')
    is_staff = serializers.CharField(source='user.is_staff')
    is_superuser = serializers.CharField(source='user.is_superuser')
    email = serializers.CharField(source='user.email')
    full_name = serializers.CharField()

    class Meta:
        model = UserProfile
        fields = (
            'id',
            'username',
            'phone_number',
            'email',
            'full_name',
            'is_superuser',
            'is_staff'
        )


class UpdateProfileSerializer(UserProfileSerializer):
    id = None

    class Meta:
        model = UserProfile
        exclude = ('user', )


class CredentialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class RequestResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', )


class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField()
