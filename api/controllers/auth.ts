// @ts-nocheck
import { Request } from 'express';
import * as AuthService from '../services/Auth';
import { writeToFile, readFile } from '../utils';
const fileName = 'data.json';

export const login = async (req: Request) => {
  const users = await readFile(fileName);

  const user = users.find(user => user.email === req.email);
  await AuthService.validatePassword(req.password, user.passwordHash);
  return {
    ...user,
    ...AuthService.getTokens(user),
  };
};

export const register = async (req: Request) => {
  const preparedUser = await AuthService.prepareUserForRegistration(req.body);
  const users = await readFile(fileName);

  await writeToFile(fileName, [...users, preparedUser]);
};
