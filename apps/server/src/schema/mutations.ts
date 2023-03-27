import * as userMutations from '../modules/user/mutations'
import { GraphQLObjectType } from 'graphql'

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations
  })
})
export default Mutations
