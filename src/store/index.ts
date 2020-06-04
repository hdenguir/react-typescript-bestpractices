import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';

const middles = [];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({});
    middles.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middles));
export default store;
