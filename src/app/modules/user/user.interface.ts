import { HydratedDocument, Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  role: 'Student';
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email?: string;
  dateOfBirth?: string;
  gender: 'male' | 'female';

  contactNum: string;
  emergencyContactNum: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}


// statics 
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
