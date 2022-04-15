
import axios, { AxiosRequestConfig } from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const accessToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("token")
    } else {
        return null
    }
}

// common config
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.common['api_key'] = API_KEY

const publicRequest = axios.create({ baseURL: BASE_URL })

const privateRequest = axios.create({ baseURL: BASE_URL })

// Add a request interceptor
privateRequest.interceptors.request.use(
    async (config) => {
        if (config.headers === undefined) {
            config.headers = {};
        }
        if (accessToken) {
            config.headers["Authorization"] = "Bearer " + accessToken() || "";
        }
        return config;
    },
    (err) => {
        console.log(err);
        Promise.reject(err);
    }
);

export {
    publicRequest,
    privateRequest
}