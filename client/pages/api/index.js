
import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const accessToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("token")
    } else {
        return null
    }
}

const header = {
    headers: {
        api_key: API_KEY,
        Authorization: "Bearer " + accessToken()
    }
}

/* Public researcher list */
export const ResearcherList = async (page, limit) => {
    return await axios.get(`${BASE_URL}public/researcher?page=${page}&limit=${limit}`, header)
}

/* Public profile */
export const ResearcherPublicProfile = async (username) => {
    return await axios.get(`${BASE_URL}public/researcher/${username}`, header)
}

/* Publications */
export const ResearcherPublications = async (username, page, limit) => {
    return await axios.get(`${BASE_URL}public/researcher/publications/${username}?page=${page}&limit=${limit}`, header)
}


/* Login */
export const Login = async (data) => {
    return await axios.post(`${BASE_URL}auth/researcher/login`, data, header)
}

/* Registration */
export const Registration = async (data) => {
    return await axios.post(`${BASE_URL}auth/researcher/register`, data, header)
}

/* -------- Protected APIs */

/* Me */
export const Me = async () => {
    return await axios.get(`${BASE_URL}researcher/profile/me`, header)
}

/* Publications */
export const Publications = async (page, limit) => {
    return await axios.get(`${BASE_URL}researcher/publication?page=${page}&limit=${limit}`, header)
}

/* Publication store */
export const PrivateCategoryItems = async () => {
    return await axios.get(`${BASE_URL}researcher/category`, header)
}

/* Publication store */
export const PublicationStore = async (data) => {
    return await axios.post(`${BASE_URL}researcher/publication`, data, header)
}