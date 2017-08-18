import { combineReducers } from 'redux';
import login from './loginReducer';
import signup from './signUpReducer';

/* Combines all our reducers! */

const rootReducer = combineReducers({
  login,
  signup
});


export default rootReducer;
