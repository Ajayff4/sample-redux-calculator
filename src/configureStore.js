import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}

export default configureStore;