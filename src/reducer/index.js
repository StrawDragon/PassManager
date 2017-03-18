/**
 * Created by User on 18.03.2017.
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import keysReducer from  './keys';
import tagsReducer from './tags';

export default combineReducers({
    keys: keysReducer,
    tags: tagsReducer,
    routing: routerReducer
});