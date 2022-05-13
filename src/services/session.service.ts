import Cookies from "universal-cookie";
import config from "../config";

class Session {
    
    cookies = new Cookies();

    constructor() {}

    setTokenCookie(accessToken: string) {
        this.cookies.set(config.TOKEN_KEY, accessToken);
    }

    removeTokenCookie() {
        this.cookies.remove(config.TOKEN_KEY);
    }

}

export const session = new Session();