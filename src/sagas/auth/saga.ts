import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import * as actions from '../../actions/auth';
import { login, signup } from '../../api/auth';

export function* loginSaga(action: AnyAction) {
  try {
    const { data } = yield call(login, action.payload);
    yield put(actions.loginSuccess(data));
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}

export function* signupSaga(action: AnyAction) {
  try {
    const { data } = yield call(signup, action.payload);
    yield put(actions.loginSuccess(data));
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}

export function* logoutSaga() {
  yield put(push('/'));
}

export default function* Saga() {
  yield takeLatest(actions.loginRequest, loginSaga);
  yield takeLatest(actions.signupRequest, signupSaga);
  yield takeLatest(actions.logOut, logoutSaga);
}
