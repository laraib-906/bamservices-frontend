import { LOGIN_USER, LOGOUT_USER } from '../actionTypes/user'

const defaultState: object = {
    user: {
        id: "",
        accessToken: "",
        email: "",
        firstName: "",
        lastName: ""
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