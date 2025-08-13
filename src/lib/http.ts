import axios from 'axios';

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