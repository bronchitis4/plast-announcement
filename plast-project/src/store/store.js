import { createStore } from 'redux';
import { userRole } from '../reducers/userRole';
import { eventsReducer } from '../reducers/eventsReducer';
import { combineReducers } from 'redux';

export const store = createStore(combineReducers({event: eventsReducer, role: userRole}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
