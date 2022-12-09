import axios from "axios"
import { BASE_URL } from '../utils/constants'

export const getTodoList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/todo`)
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

export const insertTodo = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/todo`, payload)
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

export const updateTodo = async (payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/todo`, payload)
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