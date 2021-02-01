import { all } from 'redux-saga/effects';
import auth from './auth/saga';


export default function* Saga(): IterableIterator<any> {
    yield all([
        auth(),
    ]);
}
