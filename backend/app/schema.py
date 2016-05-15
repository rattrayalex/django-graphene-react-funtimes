from graphene import relay, ObjectType, Mutation, String, Boolean, Field
from graphene.contrib.django.filter import DjangoFilterConnectionField
from graphene.contrib.django.types import DjangoNode
from graphql_relay.node.node import from_global_id

from .models import Company, Job


# Graphene will automatically map the User model's fields onto the UserType.
# This is configured in the UserType's Meta class (as you can see below)
class CompanyNode(DjangoNode):
  class Meta:
    model = Company
    filter_fields = ['name', 'jobs']
    filter_order_by = ['name']


class CreateCompany(Mutation):
  class Input:
    name = String()

  ok = Boolean()
  company = Field('CompanyNode')

  @classmethod
  def mutate(cls, instance, args, info):
    created_company = Company.objects.create(name=args.get('name'))
    ok = True
    return CreateCompany(company=created_company, ok=ok)


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


class CreateJob(Mutation):
  class Input:
    title = String()
    description = String()
    company_id = String()

  ok = Boolean()
  job = Field('JobNode')

  @classmethod
  def mutate(cls, instance, args, info):
    company_id = int(from_global_id(args.get('company_id')).id)
    company = Company.objects.get(id=company_id)
    created_job = company.jobs.create(
      title=args.get('title'),
      description=args.get('description'),
    )
    return CreateJob(job=created_job, ok=True)


class RootQuery(ObjectType):
  company = relay.NodeField(CompanyNode)
  all_companies = DjangoFilterConnectionField(CompanyNode)

  job = relay.NodeField(JobNode)
  all_jobs = DjangoFilterConnectionField(JobNode)

  class Meta:
    abstract = True


class RootMutation(ObjectType):
  create_company = Field(CreateCompany)
  create_job = Field(CreateJob)

  class Meta:
    abstract = True
