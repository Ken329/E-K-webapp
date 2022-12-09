import axios from "axios"
import { BASE_URL } from '../utils/constants'

export const getReminderList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/reminder`)
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

export const insertReminder = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/reminder`, payload)
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

export const deleteReminder = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/reminder/${id}`)
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