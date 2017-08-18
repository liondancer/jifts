import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signUpReducer(state={}, action) {
  switch(action.type) {
    case types.SIGNUP_FAILURE:
      return {};
    case types.SIGNUP_SUCCESS:
      return {};
    case types.SIGNUP_REQUEST:
      return {};
    default:
      return state;
  }
}

