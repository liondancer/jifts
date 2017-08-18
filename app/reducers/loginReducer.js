import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function logInReducer(state={}, action) {
  switch(action.type) {
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGIN_SUCCESS:
      return {};
    case types.LOGIN_REQUEST:
      return {};
    default:
      return state;
  }
}