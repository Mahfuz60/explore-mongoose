import { NextFunction, Request, Response } from 'express';
import { createUserToDB, getUserByIdFromDB, getUserFromDB } from './user.service';

//Route-->Controller-->Service
//create user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: 'Success',
    data: user,
  });

  // next();
};

//get user
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUserFromDB();
  res.status(200).json({
    status: 'Success',
    data: user,
  });
};

//find user by id

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    status: 'success',
    data: user,
  });
};
