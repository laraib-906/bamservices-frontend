import { _fetch, objToQuery } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function createSession(
	idToken: string
): Promise<any> {
	const body = {
		idToken: idToken,
	};
	return _fetch(config.authAPI, "POST", JSON.stringify(body), undefined, false);
}

export async function destroySession(): Promise<any> {
	return _fetch(`${config.authAPI}/logout`, "POST");
}
