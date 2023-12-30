# permissions.py

from rest_framework.permissions import BasePermission

class IsStudent(BasePermission):
    """
    Allows access only to authenticated student users.
    """

    def has_permission(self, request, view):
        # Check if the user is authenticated and is a student
        return bool(request.user and request.user.is_authenticated and request.user.user_type == 'Student')
