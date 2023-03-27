import * as graphql from 'graphql'
import mutation from './mutations'
import query from './queries'

const schema = new graphql.GraphQLSchema({
  query,
  mutation
})

export default schema
