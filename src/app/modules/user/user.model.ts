// 2. Create a Schema corresponding to the document interface.

import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

export const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String },
  dateOfBirth: { type: String },
  gender: { type: String, enum: ['male', 'female'], required: true },
  contactNum: { type: String, required: true },
  emergencyContactNum: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
