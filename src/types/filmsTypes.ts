import { IFilms } from '../interfaces/filmsInterface';

export const GET_FILMS = '[films] GET FILMS';
export const SUCCESS_FILMS = '[films] SUCCESS FILMS';
export const ERROR_FILMS = '[films] ERROR FILMS';

export interface GetFilmsStateType {
     data: IFilms;
    loading: boolean;
    error: string;
}

interface GetFilmsActionType {
  type: typeof GET_FILMS;
}

interface getFilmsActionSuccessType {
  type: typeof SUCCESS_FILMS;
  payload: {
    data: IFilms;
  }
}

export interface GetFilmsActionErrorType {
    type: typeof ERROR_FILMS;
    payload:{
        error: string;
    }
}

export type FilmsActionTypes =
  | GetFilmsActionType
  | getFilmsActionSuccessType
  | GetFilmsActionErrorType
