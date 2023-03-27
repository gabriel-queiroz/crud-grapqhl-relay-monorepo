import mongoose from 'mongoose'

const mongodbURL = 'mongodb://localhost:27017/crud-graphql-relay-monorepo'

export const mongooseDbConnection = async (): Promise<void> => {
  await mongoose.connect(mongodbURL)
}
