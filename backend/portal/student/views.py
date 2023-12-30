from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import StudentProfileSerializer
from .models import StudentProfile
from users.permissions import IsStudent

class DashboardView(APIView):
    permission_classes = (IsStudent,)

    def get(self, request):

        try:
            # If the user is authenticated, retrieve the StudentProfile
            student_profile = StudentProfile.objects.get(user=request.user)
            student_profile_serializer = StudentProfileSerializer(student_profile)
            content = {
                'message': 'Sucessful',
                'user': student_profile_serializer.data  # Include the serialized student profile
            }

        except StudentProfile.DoesNotExist:
            # If the StudentProfile does not exist, return user info only
            content = {
                'message': 'Student profile not found',
                'error': 'Student profile not found.'
            }

        return Response(content)

