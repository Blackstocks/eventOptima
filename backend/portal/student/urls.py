from django.urls import path
from .views import DashboardView

urlpatterns = [
    path('student/', DashboardView.as_view()),
]
