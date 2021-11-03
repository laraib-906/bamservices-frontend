import { _fetch, objToQuery } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function login(requestPayload: any): Promise<any> {
    return _fetch(`${config.loginAPI}`, "POST", JSON.stringify(requestPayload), undefined, false);
}

export async function signup(requestPayload: any): Promise<any> {
    return _fetch(`${config.signAPI}`, 'POST', JSON.stringify(requestPayload), undefined, false);
}

export async function me(): Promise<any> {
    return _fetch(`${config.meAPI}`, 'GET', undefined, undefined, false);
}
