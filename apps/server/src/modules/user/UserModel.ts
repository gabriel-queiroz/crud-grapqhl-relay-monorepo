import mongoose, { Document, Model } from 'mongoose'

export const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  {
    collection: 'User',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updateAt'
    }
  }
)
export interface IUser extends Document {
  firstName: string
  lastName: string
  city: string
  createdAt: Date
  updatedAt: Date
}
export const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model('User', UserSchema)
