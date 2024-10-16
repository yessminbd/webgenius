import userReducer from './user.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;