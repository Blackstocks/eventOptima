from django.db import models
from django.utils.translation import gettext_lazy as _

class Events(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.name}'