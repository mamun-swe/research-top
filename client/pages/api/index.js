
import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const header = {
    headers: {
        api_key: API_KEY
    }
}

/* Public researcher list */
export const ResearcherList = async (page, limit) => {
    try {
        return await axios.get(`${BASE_URL}public/researcher?page=${page}&limit=${limit}`, header)
    } catch (error) {
        if (error) return error
    }
}