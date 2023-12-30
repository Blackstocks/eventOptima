from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import StudentProfile
from users.serializers import CustomUserSerializer

class StudentProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = StudentProfile
        fields = [
            'user', 'full_name', 'phone', 'gender', 'college_name', 'address',
            'state', 'country', 'year_of_study', 'passing_year', 'want_internship',
            'campus_ambassador', 'have_startup', 'startup_stage', 'favourite_startup',
            'inspiration', 'skills', 'experience_expertise', 'linkedin_id',
            'interest_choice', 'industry_choice', 'event', 'intern_profile',
            # Include any additional fields you want to display
        ]
