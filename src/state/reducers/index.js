//we want to combine multiple reducers into an object so it's easier for
//the store to work with

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;