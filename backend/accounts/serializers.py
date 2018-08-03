from backend.accounts.models import UserProfile
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('email', 'password',)


class UserProfileSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='user.id', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    is_staff = serializers.CharField(source='user.is_staff', read_only=True)
    is_superuser = serializers.CharField(source='user.is_superuser', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)
    full_name = serializers.CharField(read_only=True)

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
