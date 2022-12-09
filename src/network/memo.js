import axios from "axios"
import { BASE_URL } from '../utils/constants'

export const getMemoList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/memo`)
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

export const insertMemo = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/memo`, payload)
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

export const updateMemo = async (payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/memo`, payload)
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

export const deleteMemo = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/memo/${id}`)
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