import userQueries from '../modules/user/queries'
import { GraphQLObjectType } from 'graphql'

const Queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQueries
  }
})
export default Queries
