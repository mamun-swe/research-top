
import axios from "axios"

/* Login */
const login = async (data) => {
    const header = {
        headers: {
            api_key: process.env.REACT_APP_API_KEY
        }
    }

    return await axios.post(`${process.env.REACT_APP_AUTH_ENDPOINT}login`, data, header)
}

export const Auth = {
    login
}