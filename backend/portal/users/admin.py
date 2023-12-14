from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.utils.translation import gettext_lazy as _

from .models import CustomUser, StudentProfile

class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = CustomUser
        # Define the fields you want to include in your form here, if different:
        fields = '__all__'

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        # Define the fields you want to include in your form here, if different:
        fields = ('email',)

class CustomUserAdmin(UserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm

    # Define a new User admin
    fieldsets = (
        (None, {'fields': ('email', 'password', 'user_type', 'is_active', 'is_staff')}),  # Custom fields
        (_('Permissions'), {'fields': ('groups', 'user_permissions')}),  # Keep permissions fields
        (_('Important dates'), {'fields': ('last_login',)}),  # Remove 'date_joined' if not in your model
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'user_type', 'is_active', 'is_staff'),  # Custom fields for user creation
        }),
    )

    list_display = ('email', 'user_type', 'is_staff', 'is_active')
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)

admin.site.register(StudentProfile)
