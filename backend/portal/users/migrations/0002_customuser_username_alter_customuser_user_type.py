# Generated by Django 5.0 on 2023-12-14 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='username',
            field=models.CharField(blank=True, max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[('Student', 'Student'), ('Campus Ambassador', 'Campus Ambassador'), ('Admin', 'Admin'), ('Startup', 'Startup'), ('Professional', 'Professional'), ('Contingent', 'Contingent')], max_length=255),
        ),
    ]