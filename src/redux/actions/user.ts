import { LOGIN_USER, LOGOUT_USER } from "../actionTypes/user";


export const loginUserAction = (userData: object) => {
    return { type: LOGIN_USER, payload: { user: userData } };
};

export const logoutUserAction = (userData: object) => {
    return { type: LOGOUT_USER, payload: { user: userData } };
};

