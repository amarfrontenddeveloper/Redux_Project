import {LOG_OUT} from '../constants/logout.types';

export const LogoutAction = () => {
  return async dispatch => dispatch({type: LOG_OUT});
};
