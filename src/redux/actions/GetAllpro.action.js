import {
  GET_ALL_PRO_REQUESTED,
  GET_ALL_PRO_SUCCESS,
  GET_ALL_PRO_FAILURE,
} from '../constants/GetAllpro.types';
import ENDPOINTS from '../../utils/apiEndPoints';
import {AUTHORIZATION, BASE_URL, GET_METHOD, httpClient} from '../../utils/constants';

export const getAllProduct = tokenParams => {
  console.log('params', tokenParams);
  return async dispatch => {
    dispatch({
      type: GET_ALL_PRO_REQUESTED,
    });
    try {
      const {data} = await httpClient[GET_METHOD](
        `${BASE_URL + ENDPOINTS.GET_ALL_PRO_DATA}`,
        AUTHORIZATION(tokenParams),
      );
      console.log('dats', data);
      dispatch({
        type: GET_ALL_PRO_SUCCESS,
        payload: {all_Product: data},
        error: false,
      });
      return data;
    } catch (error) {
      console.log('error:signIn', error);
      if (error.response) {
        dispatch({
          type: GET_ALL_PRO_FAILURE,
          payload: {all_Product: error},
          error: true,
        });
      } else {
        dispatch({
          type: GET_ALL_PRO_FAILURE,
          error: true,
        });
      }
    }
  };
};
