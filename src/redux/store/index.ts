import { compose, createStore } from 'redux';
import users from '../reducers/user';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export default createStore(users, composeEnhancers())
