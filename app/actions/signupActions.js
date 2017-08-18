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

export function signUp(cred) {
  return function (dispatch) {
    $.ajax({
      method: 'POST',
      dataType: 'JSON',
      url: api.SIGNUP_ENDPOINT,
      data: {
        cred
      },
      success: payload => {
        console.log(payload);
        // switch (payload.type) {
        //   case api.success:
        //     console.log("success");
        //     return {};
        //   default:
        //     console.log("default");
        //     return {};
        // }
      },
      error: paylaod => {
        return dispatch(signupFailure());
      }
    });
  };
}