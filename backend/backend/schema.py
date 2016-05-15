import graphene
from graphene.contrib.django.debug import DjangoDebugPlugin

import app.schema


class RootQuery(app.schema.RootQuery):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class RootMutation(app.schema.RootMutation):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(
  name='Company Schema',
  query=RootQuery,
  mutation=RootMutation,
  plugins=[DjangoDebugPlugin()]
)
