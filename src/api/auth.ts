import { _fetch, objToQuery } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function login(): Promise<any> {
    return _fetch(`${config.authAPI}/logout`, "POST");
}

export async function signup(requestPayload: any): Promise<any> {
    const query = objToQuery(requestPayload);
    console.log(config.authAPI);
    return _fetch(`${config.authAPI}`, 'POST', JSON.stringify(query));
}
