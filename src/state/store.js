//we create a Store to house the states and reducers,
//and where future actions are taken on the states using reducers and newer state values

import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers/index";
//we have to apply the thunk middleware to our store so that it can handle
//asynchronous functions (of which dispatch could be one) and it also allows
//us to use other asynchronous calls to APIs within a reducer - it treats
//any reducer call as synchronous now
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)