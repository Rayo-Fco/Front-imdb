import { combineReducers } from 'redux';
import filmsReducer from '../reducer/filmsReducer';

const rootReducer = combineReducers({
  filmsReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
