import axios from "axios"
import { BASE_URL } from '../utils/constants'

export const getMemoryList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/memory`)
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

export const getMemoryById = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/memoryById`,
            payload
        )
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

export const insertMemory = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/memory`,
            payload
        )
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

export const updateMemory = async (payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/memory`, payload)
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

export const deleteMemory = async (id, payload) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/memory/${id}`, payload)
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