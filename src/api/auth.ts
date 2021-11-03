import { _fetch, objToQuery } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function login(): Promise<any> {
    return _fetch(`${config.authAPI}/logout`, "POST");
}

export async function signup(requestPayload: any): Promise<any> {
    return _fetch(`${config.authAPI}`, 'POST', JSON.stringify(requestPayload), undefined, false);
}
