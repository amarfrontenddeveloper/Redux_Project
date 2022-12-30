import { applyMiddleware,createStore } from "redux";
import  thunk  from "redux-thunk";
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "../reducers/index";

const perstConfig = {
    key:'rootReducer',
    storage:AsyncStorage,
}
const pReducer = persistReducer(perstConfig,rootReducer)
const middleware = applyMiddleware(thunk)
const store = createStore(pReducer, middleware)
const persistor = persistStore(store)
export {persistor, store}