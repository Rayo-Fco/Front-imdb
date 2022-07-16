import {
  FilmsActionTypes,
  GetFilmsStateType,
  GET_FILMS,
  SUCCESS_FILMS,
  ERROR_FILMS,
} from '../types/filmsTypes';

const initialStateGetFilms: GetFilmsStateType = {
  data: {
    items: [],
    errorMessage: '',
  },
  loading: false,
  error: '',
};

function filmsReducer(
  state = initialStateGetFilms,
  action: FilmsActionTypes,
): GetFilmsStateType {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_FILMS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case ERROR_FILMS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default filmsReducer;
