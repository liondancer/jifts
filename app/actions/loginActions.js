import * as types from './actionTypes';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE
  };
}

export function login(payload) {
  return dispatch => {

  };
}