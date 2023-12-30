from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import EventsDetails
from .models import Events

class SummitView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):

        try:
            events = Events.objects.all()  # This returns a QuerySet
            serializer = EventsDetails(events, many=True)  # Note the many=True argument
            content = {
                'message': 'Sucessful',
                'events': serializer.data
            }

        except Events.DoesNotExist:
            content = {
                'message': 'Error',
                'error': 'Error'
            }

        return Response(content)

