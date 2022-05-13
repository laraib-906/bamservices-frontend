import { combineReducers } from 'redux';
import users from './user';
import {toastsReducer as toasts} from 'react-toastify-redux';
import filesReducer from './file';

export default combineReducers({
    users,
    toasts,
    files: filesReducer
})