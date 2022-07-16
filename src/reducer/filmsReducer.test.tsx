import { ERROR_FILMS, GET_FILMS,SUCCESS_FILMS } from '../types/filmsTypes';
import filmsReducer from './filmsReducer';
import { IFilms } from '../interfaces/filmsInterface';

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

const initialState = {
  data: {
    items: [],
    errorMessage: '',
  },
  loading: false,
  error: '',
};

describe('Films reducer', () => {

  it('01. Get Films reducer', () => {
    const result = filmsReducer(undefined, {
        type: GET_FILMS,
    });
    const expectedPayload = {
      ...initialState,
      loading: true,
    };
    expect(result).toEqual(expectedPayload);
  });

  it('02. Success Films reducer', () => {
    const result = filmsReducer(undefined, {
        type: SUCCESS_FILMS,
        payload: {
            data:mockSuccess
        }
    });
    const expectedPayload = {
      ...initialState,
      data: mockSuccess,
      loading: false,
    };
    expect(result).toEqual(expectedPayload);
  });
  it('03. Error Films reducer', () => {
    const result = filmsReducer(undefined, {
        type:ERROR_FILMS,
        payload: {
            error:'error'
        }
    });
    const expectedPayload = {
      ...initialState,
        error:'error'
    };
    expect(result).toEqual(expectedPayload);
  });
});