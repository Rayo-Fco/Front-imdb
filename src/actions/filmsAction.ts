import { IFilms } from '../interfaces/filmsInterface';
import {
  GET_FILMS,
  ERROR_FILMS,
  SUCCESS_FILMS,
  FilmsActionTypes,
} from '../types/filmsTypes';

const getFlimsAction = ():FilmsActionTypes => ({
  type: GET_FILMS,
});

const getFlimsActionSuccess = (data:IFilms):FilmsActionTypes => ({
  type: SUCCESS_FILMS,
  payload: {
    data,
  },
});

const getFlimsActionError = (error:string):FilmsActionTypes => ({
  type: ERROR_FILMS,
  payload: {
    error,
  },
});

export {
  getFlimsAction,
  getFlimsActionError,
  getFlimsActionSuccess,
};
