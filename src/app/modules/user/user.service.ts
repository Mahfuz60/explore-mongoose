import { IUser } from './user.interface';
import { User } from './user.model';

// step-4:Dataase Query on Model
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);

  await user.save();
  return user;
  // console.log(user);
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1, gender: 1 });
  return user;
};


