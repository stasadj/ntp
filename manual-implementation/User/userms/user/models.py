from django.db import models

import json


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=10, primary_key=True, blank=False)
    password = models.CharField(max_length=20, blank=False)
    firstName = models.CharField(max_length=20, blank=False)
    lastName = models.CharField(max_length=20, blank=False)
    email = models.CharField(max_length=20, blank=True)
    loggedIn = models.BooleanField()

    @classmethod
    def is_logged_in(cls, username):
        queryset = cls.objects.all()
        user = queryset.get(username=username)
        return user.loggedIn

    @classmethod
    def get_name(cls, username):
        queryset = cls.objects.all()
        user = queryset.get(username=username)
        return user.firstName + ', ' + user.lastName

    @classmethod
    def log_in(cls, request):
        queryset = cls.objects.all()
        username = json.loads(request.body)['username']
        password = json.loads(request.body)['password']
        user = queryset.get(username=username, password=password)
        user.loggedIn = True
        user.save()
        return username

    @classmethod
    def log_out(cls, username):
        queryset = cls.objects.all()
        user = queryset.get(username=username)
        user.loggedIn = False
        user.save()
        return username


class LoginInfo(models.Model):
    username = models.CharField(max_length=10, primary_key=True)
    password = models.CharField(max_length=20)
