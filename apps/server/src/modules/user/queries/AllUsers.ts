import { UserModel } from '../UserModel'
import * as graphql from 'graphql'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 10

const DEFAULT_PAGINATION = {
  page: DEFAULT_PAGE,
  pageSize: DEFAULT_PAGE_SIZE
}

const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    firstName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    lastName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
  }
})

const usersType = new graphql.GraphQLObjectType({
  name: 'Users',
  fields: {
    totalPages: {
      type: graphql.GraphQLInt
    },
    currentPage: {
      type: graphql.GraphQLInt
    },
    totalItems: {
      type: graphql.GraphQLInt
    },
    users: {
      type: new graphql.GraphQLList(userType)
    }
  }
})

export const allUsers = {
  users: {
    args: {
      page: {
        type: graphql.GraphQLInt
      },
      pageSize: {
        type: graphql.GraphQLInt
      }
    },
    type: usersType,
    resolve: async (data = DEFAULT_PAGINATION) => {
      const skipAmount = (data.page - 1) * data.pageSize
      const count = await UserModel.count()
      const users = UserModel.find({})
        .skip(skipAmount)
        .limit(data.pageSize * 1)
        .lean()
      return {
        data: users,
        totalPages: Math.ceil(count / data.pageSize),
        currentPage: data.page,
        totalItems: count
      }
    }
  }
}
