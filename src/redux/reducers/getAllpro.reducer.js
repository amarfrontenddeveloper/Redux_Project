import {
  GET_ALL_PRO_REQUESTED,
  GET_ALL_PRO_SUCCESS,
  GET_ALL_PRO_FAILURE,
} from '../constants/GetAllpro.types';
import {initialState} from '../../utils/constants';
export const getAllProductReducer = (state = initialState, action) => {
  console.log('action.payload', action.payload);
  switch (action.type) {
    case GET_ALL_PRO_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        all_Product: action.payload.all_Product,
      };
    case GET_ALL_PRO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
