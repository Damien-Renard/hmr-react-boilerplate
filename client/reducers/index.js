import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* ---- Import Other Reducers ---- */

export default combineReducers({

  routing: routerReducer,
});
