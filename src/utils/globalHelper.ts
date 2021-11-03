import { SyntheticEvent } from "react";
import { createBrowserHistory } from 'history';
import Cookies from 'universal-cookie';


// const TOKEN_KEY = btoa('_secret_text');
const TOKEN_KEY = '_secret_text';


type API_METHOD = 'POST' | 'GET' | 'PATCH' | 'PUT' | 'UPDATE' | 'DELETE';

function getHeaders(contentType?: string) {
    // TODO: Move get token to a service
    const cookies = new Cookies();
    let tokenData = cookies.get(TOKEN_KEY);

    let headers: any = {
        'content-type': contentType ?? 'application/json',
    }
    if (tokenData) {
        headers['Authorization'] = `${tokenData}`;
    }

    return headers;
}
function handleAuthorization(header: any) {
    if (!(header['Authorization'])) {
        // let history = createBrowserHistory();
        // history.push('login', null);
    }
}
// TODO: Keeping this in Global helper for now.
export async function _fetch(url: string, method: API_METHOD = 'GET', body?: any, contentType?: string, checkAuthToken: boolean = true) {
    const cookies = new Cookies();

    const headers = getHeaders(contentType);
    checkAuthToken && handleAuthorization(headers)

    return fetch(url, {
        headers,
        body,
        method
    }).then(async res => {

        const json = await res.json();

        if (res.ok) {
            return json.data;
        } else {
            if (res.status === 401 && json?.data?.Unauthorized === true) {
                cookies.remove(TOKEN_KEY);
                let history = createBrowserHistory();
                history.push('login', null);
            }
            return Promise.reject(json);
        }
    })
        .catch(function (err) {
            return Promise.reject(err);
        });
}


export function _fetchStream(url: string, method: API_METHOD = 'GET', body?: any, contentType?: string) {
    const headers = getHeaders(contentType);

    return fetch(url, {
        headers,
        body,
        method
    })
        .then(response => response.blob())
        .then(blob => blob)
        .catch(function (err) {
            return Promise.reject(err);
        });
}


export function objToQuery(obj: any) {
    if (!Object.keys(obj).length) return "";
    return Object.entries(obj).reduce((a, [key, value]) => {
        return `${a && a + '&'}${key}=${(typeof value === "object") ? encodeURIComponent(JSON.stringify(value)) : value}`
    }, '')
}

export function stopEventPropagation(event: SyntheticEvent) {
    event.stopPropagation();
}

export function currencyFormatter(amount: number | bigint, currency = "USD", locale = "en-EN") {
    return new Intl.NumberFormat(locale, { style: "currency", currency, minimumFractionDigits: 0 }).format(amount);
}

