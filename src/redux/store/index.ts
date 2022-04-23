import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


export default function configureStore() {
    const store = createStore(reducers, composeEnhancers());
    return store;
}
