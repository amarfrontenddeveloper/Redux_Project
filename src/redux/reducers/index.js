import { combineReducers } from "redux";
import { Sign_In_Reducer } from "./login.reducer";
import { LOG_OUT } from "../constants/logout.types";
import { getAllProductReducer } from "./getAllpro.reducer";

const appReducer = combineReducers({
    Sign_In_Reducer:Sign_In_Reducer,
    getAllProductReducer: getAllProductReducer,
})
const initialState= appReducer({}, {})
const rootReducer = (state,action) => {
    if(action.type === LOG_OUT){
        state=initialState
    }
    return appReducer(state,action)
}
export default rootReducer