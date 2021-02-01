import { handleActions } from 'redux-actions';
import * as types from '../types/auth';

export const initialState = {
  isAuth: false
};
export default handleActions(
  {
    [types.LOGIN_SUCCESS]: (state: any) => ({
      ...state,
      isAuth: true,
    }),
    [types.LOGOUT]: (state: any) => ({
      ...state,
      isAuth: false,
    }),
  },
  initialState,
);
