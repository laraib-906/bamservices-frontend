import { LOGIN_USER, LOGOUT_USER } from '../actionTypes/user'

const defaultState: object = {
    user: {
        ID: '',
        Username: '',
        groups: [
            {
                GroupName: '',
                GroupId: ''
            }
        ],
    }
};

export default function users(state: object = defaultState, action: any) {

    switch (action.type) {

        case LOGIN_USER:
            return { user: action.payload.user }

        case LOGOUT_USER:
            return defaultState

        default:
            return state
    }
}