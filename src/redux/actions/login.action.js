import {APPLICATION_JSON_HEADER, BASE_URL, POST_METHOD, httpClient} from '../../utils/constants';
import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUESTED,
} from '../constants/login.types';

import ENDPOINTS from '../../utils/apiEndPoints';
export const signin = params => {
  console.log(params);
  return async dispatch => {
    dispatch({
      type: SIGN_IN_REQUESTED,
    });
    try {
      const {data} = await httpClient[POST_METHOD](
        `${BASE_URL + ENDPOINTS.SIGN_IN}`,
       params ,
        APPLICATION_JSON_HEADER,
      );
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {login_response: data},
        error: false,
      });
      console.log('data',data);
      return data;
    } catch (error) {
      console.log('error:signIn', error);
      if (error.response) {
        dispatch({
          type: SIGN_IN_FAILURE,
          payload: {login_response: error},
          error: true,
        });
        return error;
      } else {
        dispatch({
          type: SIGN_IN_FAILURE,
          payload: {login_response: error},
          error: true,
        });
        return error;
      }
    }
  };
};
