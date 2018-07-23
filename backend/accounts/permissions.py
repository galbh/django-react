from rest_framework import permissions


class IsOwnerOrSuperuser(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_superuser
