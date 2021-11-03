import { combineReducers } from 'redux';
import users from './user';
import {toastsReducer as toasts} from 'react-toastify-redux';

export default combineReducers({
    users,
    toasts
})