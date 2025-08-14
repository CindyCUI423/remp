import axios, {AxiosError} from 'axios';
import {ErrorResponse} from "@/types/api";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://realestate20250425231047.azurewebsites.net/api";

export const http = axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    }
})

// http request interceptor will execute (config) => {...} before sending the request,
// add token to the request header via config
http.interceptors.request.use((config) => {

    // check if it is in a browser (client)
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;



    }


    return config;

}, (err) => Promise.reject(err)) // throw the error, try/catch statement can catch the error when fail to call an api



function normalizeErrorMessage(error: AxiosError<ErrorResponse>): string {
    const data = error.response?.data;
    return data?.message
        || data?.title
        || "Error, please try again.";

}



// http response interceptor
http.interceptors.response.use(function onFulfilled(response) {
    return response; // 2xx
}, async function onRejected(error: AxiosError<ErrorResponse>) {

    const status = error.response?.status;
    const message = normalizeErrorMessage(error);

    switch (status) {
        case 400:
            return Promise.reject(new Error(message || "Bad request"));
        case 401:
            return Promise.reject(new Error(message || "Unauthorized"));
        case 403:
            return Promise.reject(new Error(message || "Forbidden"));
        case 404:
            return Promise.reject(new Error(message || "Not found"));
        case 409:
            return Promise.reject(new Error(message || "Conflict"));
        case 500:
            return Promise.reject(new Error(message || "Internal Server Error"));

        default: {
            if (!status) return Promise.reject(new Error("Network error or CORS issue"));
            return Promise.reject(new Error(message || `Network error: ${status}`));
        }
    }

    
}
);