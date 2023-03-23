import * as graphql from 'graphql'

const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
  }
})

const userSchema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: {
            type: graphql.GraphQLInt
          }
        },
        resolve: function () {
          return {
            id: 11111,
            firstName: 'john',
            lastName: 'doe',
            city: 'São Paulo'
          }
        }
      }
    }
  })
})

export default userSchema
