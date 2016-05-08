from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User

from .serializers import CompanySerializer, JobSerializer, UserSerializer
from .models import Company, Job


def index(request):
  return render(request, 'index.html')


class UserViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer


class CompanyViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer


class JobViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = Job.objects.all()
  serializer_class = JobSerializer
