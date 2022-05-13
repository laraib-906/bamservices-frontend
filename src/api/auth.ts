import { _fetch } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function login(requestPayload: any): Promise<any> {
    return _fetch(`${config.login}`, "POST", JSON.stringify(requestPayload), undefined, false);
}

export async function signup(requestPayload: any): Promise<any> {
    return _fetch(`${config.sign}`, 'POST', JSON.stringify(requestPayload), undefined, false);
}

export async function me(): Promise<any> {
    return _fetch(`${config.me}`, 'GET', undefined, undefined, false);
}
