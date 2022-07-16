/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  put,
  all,
  call,
  CallEffect,
  PutEffect,
  SelectEffect,
  takeEvery,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  getFlimsActionError,
  getFlimsActionSuccess,
} from '../actions/filmsAction';
import {
  FilmsActionTypes,
  GET_FILMS,
} from '../types/filmsTypes';
import { Top250Movies } from '../services/filmsService';
import { IFilms } from '../interfaces/filmsInterface';

function* getTop250Movies(): Generator<
  | CallEffect<AxiosResponse>
  | SelectEffect
  | PutEffect<FilmsActionTypes>,
  void
  > {
  try {
    const json:any = yield call(Top250Movies);
    yield put(getFlimsActionSuccess(json.data as IFilms));
  } catch (error:unknown) {
    yield put(getFlimsActionError(error as string));
  }
}

export default function* filmsSaga():Generator {
  yield all([takeEvery(GET_FILMS, getTop250Movies)]);
}
