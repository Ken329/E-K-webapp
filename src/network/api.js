import axios from 'axios'

import { BASE_URL } from '../utils/constants'

const axiosInstances = (token) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  })
  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error.message)
    }
  )

  return axiosInstance
}

export default axiosInstances
