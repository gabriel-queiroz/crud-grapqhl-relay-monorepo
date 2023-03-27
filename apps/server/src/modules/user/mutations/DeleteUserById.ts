import { UserModel } from '../UserModel'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

export const deleteUserById = mutationWithClientMutationId({
  name: 'DeleteUserById',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ id }) => {
    await UserModel.findByIdAndDelete(id)
    return 'deleted success'
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: message => message
    }
  }
})
