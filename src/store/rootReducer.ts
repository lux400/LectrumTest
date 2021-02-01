import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from '../reducers';

const rootReducer = (history: any) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
// @ts-ignore

export default history => (state: any, action: any) => {
  return rootReducer(history)(state, action);
};
