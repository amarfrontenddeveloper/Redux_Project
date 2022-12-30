import { SIGN_IN_FAILURE,SIGN_IN_REQUESTED,SIGN_IN_SUCCESS } from "../constants/login.types";
import { initialState } from "../../utils/constants";
export const Sign_In_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGN_IN_REQUESTED:
        return {
            ...state,
            isLoading:true,
        }
        case SIGN_IN_SUCCESS:
        return{
            ...state,
            isLoading:false,
            login_response: action.payload.login_response,
        }
        case SIGN_IN_FAILURE:
        return{
            ...state,
            isLoading:false,
            login_response: action.payload.login_response,
        }
        default:
            return state
    }
}