import { AppState } from '../store/rootReducer';
import { GetFilmsStateType } from '../types/filmsTypes';

export const getFilms = (state:AppState)
:GetFilmsStateType => state.filmsReducer;
