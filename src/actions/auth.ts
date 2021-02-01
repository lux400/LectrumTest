import { createAction } from 'redux-actions';
import * as types from '../types/auth';

export const loginRequest = createAction(types.LOGIN_REQUEST);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginFailure = createAction(types.LOGIN_FAILURE);

export const signupRequest = createAction(types.SIGNUP_REQUEST);
export const signupSuccess = createAction(types.SIGNUP_SUCCESS);
export const signupFailure = createAction(types.SIGNUP_FAILURE);

export const logOut = createAction(types.LOGOUT);
