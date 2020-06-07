import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './actions';
import { AppState } from './reducers';

const middles = [thunk as ThunkMiddleware<AppState, AppActions>];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({});
    middles.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middles));
export default store;
