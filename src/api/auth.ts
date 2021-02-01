import { post, get } from '../api';
import { UserCredentials } from '../interfaces';

export function login({ email, password }: UserCredentials) {
  return post(`/login`, { email, password });
}

export function signup({ email, password }: UserCredentials) {
  return post(`/signup`, { email, password });
}
