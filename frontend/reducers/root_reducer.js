import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import moviesReducer from './movies_reducer';
// import userErrorsReducer from "./error_reducers/user_errors_reducer";
// import sessionErrorsReducer from "./error_reducers/session_errors_reducer";

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  session: sessionReducer,
  movies: moviesReducer 
});

export default rootReducer;


// const rootReducer = combineReducers({
//   entities: combineReducers({
//     users: usersReducer
//   }),
//   errors: combineReducers({
//     user: userErrorsReducer,
//     session: sessionErrorsReducer
//   }),
//   session: sessionReducer
// });