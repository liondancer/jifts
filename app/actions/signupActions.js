import * as types from './actionTypes';
import * as api from './apiEndPoint';
import $ from 'jquery';

export function signupRequest(payload) {
  return {
    type: types.SIGNUP_REQUEST
  };
}

export function signupSuccess(payload) {
  return {
    type: types.SIGNUP_SUCCESS
  };
}

export function signupFailure(payload) {
  return {
    type: types.SIGNUP_FAILURE
  };
}

export function signUp(credentials) {
  return dispatch => {
    console.log("Creds");
    console.log(credentials);
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: api.SIGNUP_ENDPOINT,
      data: credentials,
      success: payload => {
        console.log(payload);

      },
      error: paylaod => {
        return dispatch(signupFailure());
      }
    });
  };
}