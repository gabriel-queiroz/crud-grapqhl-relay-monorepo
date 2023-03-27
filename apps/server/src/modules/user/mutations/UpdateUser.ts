import { mutationWithClientMutationId } from 'graphql-relay'
import { UserModel } from '../UserModel'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'
export const updateUser = mutationWithClientMutationId({
  name: 'UpdateUser',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({ id, ...data }, context) => {
    const user = await UserModel.findByIdAndUpdate(id, { ...data })
    if (user) {
      return {
        message: 'user updated successful'
      }
    }
    return {
      message: 'User not found'
    }
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message
    }
  }
})
