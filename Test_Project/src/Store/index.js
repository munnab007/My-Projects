import {createStore,applyMiddleware} from "redux"
import Reducerlist from "./Reducer";
import logger from "redux-logger";
import Callpromse from "redux-promise-middleware";
//import thunk from "redux-thunk";

const createMiddlewarepromise = applyMiddleware(logger,Callpromse)(
    createStore
)

export default createMiddlewarepromise(
    Reducerlist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)