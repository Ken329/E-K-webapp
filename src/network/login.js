import axios from "axios"
import { BASE_URL } from '../utils/constants'

export const login = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/login`, payload)
            .then((response) => {
                const { status, data } = response
                if (status < 400) {
                    return data
                }
            })
        return response
    } catch (error) {
        return error.message
    }
}