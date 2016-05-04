from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Company, Job


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('email', 'username')


class CompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = Company


class JobSerializer(serializers.ModelSerializer):
  class Meta:
    model = Job
