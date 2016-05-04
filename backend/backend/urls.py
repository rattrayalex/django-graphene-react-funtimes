from django.conf.urls import url, include
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt

from graphene.contrib.django.views import GraphQLView
from rest_framework.routers import DefaultRouter

from .schema import schema
from app import views

router = DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'jobs', views.JobViewSet)
router.register(r'users', views.UserViewSet)


urlpatterns = [
  url(r'^admin/', admin.site.urls),

  url(r'^graphql', csrf_exempt(GraphQLView.as_view(schema=schema))),
  url(r'^graphiql', include('django_graphiql.urls')),

  url(r'^api/auth/', include('rest_framework.urls', namespace='rest_framework')),
  url(r'^api/', include(router.urls)),
]
