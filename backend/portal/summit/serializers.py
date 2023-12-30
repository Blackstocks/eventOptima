from rest_framework import serializers
from .models import Events

class EventsDetails(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['name',]
