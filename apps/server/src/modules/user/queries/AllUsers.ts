import { UserModel } from '../UserModel'
import * as graphql from 'graphql'

const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
  }
})
export const allUsers = {
  users: {
    type: new graphql.GraphQLList(userType),
    resolve: async () => await UserModel.find({}).lean()
  }
}
