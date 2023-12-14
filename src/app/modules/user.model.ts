import mongoose, { Schema } from "mongoose";
import { User } from "./user/user.interface";

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orders: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
