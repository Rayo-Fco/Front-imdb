import { fork, all } from 'redux-saga/effects';
import filmsSaga from '../sagas/filmsSaga';

export default function* rootSaga(): Generator {
  yield all([fork(filmsSaga)]);
}
