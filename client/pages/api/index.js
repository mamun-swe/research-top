

import { publicRequest, privateRequest } from "./axios.config"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

/* Public researcher list */
export const ResearcherList = async (page, limit) => {
    return await publicRequest.get(`${BASE_URL}/public/researcher?page=${page}&limit=${limit}`)
}

/* Public profile */
export const ResearcherPublicProfile = async (username) => {
    return await publicRequest.get(`${BASE_URL}/public/researcher/${username}`)
}

/* Publications */
export const ResearcherPublications = async (username, page, limit) => {
    return await publicRequest.get(`${BASE_URL}/public/researcher/publications/${username}?page=${page}&limit=${limit}`)
}


/* Login */
export const Login = async (data) => {
    return await publicRequest.post(`${BASE_URL}/auth/researcher/login`, data)
}

/* Registration */
export const Registration = async (data) => {
    return await publicRequest.post(`${BASE_URL}/auth/researcher/register`, data)
}

/* -------- Private API requests */

/* Me */
export const Me = async () => {
    return await privateRequest.get(`${BASE_URL}/researcher/profile/me`)
}

/* Update profile info */
export const UpdateProfileInfo = async (data) => {
    return await privateRequest.put(`${BASE_URL}/researcher/profile/update`, data)
}

/* Update username */
export const UpdateUsername = async (data) => {
    return await privateRequest.put(`${BASE_URL}/researcher/profile/update-username`, data)
}

/* Publications */
export const Publications = async (page, limit) => {
    return await privateRequest.get(`${BASE_URL}researcher/publication?page=${page}&limit=${limit}`)
}

/* Publication store */
export const PrivateCategoryItems = async () => {
    return await privateRequest.get(`${BASE_URL}/researcher/category`)
}

/* Publication store */
export const PublicationStore = async (data) => {
    return await privateRequest.post(`${BASE_URL}/researcher/publication`, data)
}

/* Publication show */
export const PublicationShow = async (id) => {
    return await privateRequest.get(`${BASE_URL}/researcher/publication/${id}`)
}

/* Publication update */
export const PublicationUpdate = async (id, data) => {
    return await privateRequest.put(`${BASE_URL}/researcher/publication/${id}`, data)
}

/* Publication delete */
export const PublicationDelete = async (id) => {
    return await privateRequest.delete(`${BASE_URL}/researcher/publication/${id}`)
}