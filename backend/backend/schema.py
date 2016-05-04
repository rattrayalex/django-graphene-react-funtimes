import graphene

import app.schema


class RootQuery(app.schema.RootQuery):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(name='Company Schema')
schema.query = RootQuery
