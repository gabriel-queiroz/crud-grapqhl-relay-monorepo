import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { UserModel } from '../UserModel'

export const createUser = mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    city: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ firstName, lastName, city }, context) => {
    const user = await new UserModel({
      firstName,
      lastName,
      city
    }).save()
    return {
      user
    }
  },
  outputFields: {
    data: {
      type: GraphQLString,
      resolve: async ({ user }) => {
        return user._id
      }
    }
  }
})
