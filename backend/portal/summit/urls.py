from django.urls import path
from .views import SummitView

urlpatterns = [
    path('', SummitView.as_view()),
]
