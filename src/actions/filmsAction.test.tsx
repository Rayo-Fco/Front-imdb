import createSagaMiddleware from 'redux-saga';
import configureMockStore from 'redux-mock-store';
import {
  getFlimsAction,
  getFlimsActionError,
  getFlimsActionSuccess
} from './filmsAction';
import {
  FilmsActionTypes,
  GET_FILMS,
  SUCCESS_FILMS,
  ERROR_FILMS,
} from '../types/filmsTypes';
import { IFilms } from '../interfaces/filmsInterface'

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});

const mockSuccess:IFilms = {
  items:[{
      crew:'crew mock',
      fullTitle:'full tittle mock',
      id:'T2222',
      image:'img mock',
      imDbRating:0,
      imDbRatingCount:0,
      rank:0,
      title:'title mock',
      year:2022
  }],
  errorMessage:''
};

describe('Films Action', () => {
  it('01 get film', () => {
    store.dispatch(getFlimsAction());
    const actions = store.getActions();
    const expectedPayload: FilmsActionTypes = {
      type: GET_FILMS,
    };
    expect(actions[0]).toEqual(expectedPayload);
  });

  it('02. Success Films', () => {
    store.dispatch(getFlimsActionSuccess(mockSuccess));
    const actions = store.getActions();
    const expectedPayload: FilmsActionTypes = {
      type: SUCCESS_FILMS,
      payload: {
        data: mockSuccess
      },
    };
    expect(actions[1]).toEqual(expectedPayload);
  });

  it('03. Error Films', () => {
    store.dispatch(getFlimsActionError('error generado'));
    const actions = store.getActions();
    const expectedPayload: FilmsActionTypes = {
      type: ERROR_FILMS,
      payload: {
        error: 'error generado'
      },
    };
    expect(actions[2]).toEqual(expectedPayload);
  });
});
