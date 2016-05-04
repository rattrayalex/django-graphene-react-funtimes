from graphene import relay, ObjectType
from graphene.contrib.django.filter import DjangoFilterConnectionField
from graphene.contrib.django.types import DjangoNode

from .models import Company, Job


# Graphene will automatically map the User model's fields onto the UserType.
# This is configured in the UserType's Meta class (as you can see below)
class CompanyNode(DjangoNode):
  class Meta:
    model = Company
    filter_fields = ['name', 'jobs']
    filter_order_by = ['name']


class JobNode(DjangoNode):
  class Meta:
    model = Job
    # Allow for some more advanced filtering here
    filter_fields = {
      'title': ['exact', 'icontains', 'istartswith'],
      'description': ['exact', 'icontains'],
      'company': ['exact'],
      'company__name': ['exact'],
    }
    filter_order_by = ['title', 'company__name']


class RootQuery(ObjectType):
  company = relay.NodeField(CompanyNode)
  all_companies = DjangoFilterConnectionField(CompanyNode)

  job = relay.NodeField(JobNode)
  all_jobs = DjangoFilterConnectionField(JobNode)

  class Meta:
    abstract = True
