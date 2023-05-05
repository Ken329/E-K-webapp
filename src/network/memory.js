import axiosInstances from './api'

export const getMemoryList = async (auth) => {
  try {
    const memoryInstance = axiosInstances(auth.token)
    const response = await memoryInstance
      .get(`/api/memory`)
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

export const getMemoryById = async (auth, payload) => {
  try {
    const memoryInstance = axiosInstances(auth.token)
    const response = await memoryInstance
      .post(`/api/memoryById`, payload)
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

export const insertMemory = async (auth, payload) => {
  try {
    const memoryInstance = axiosInstances(auth.token)
    const response = await memoryInstance
      .post(`/api/memory`, payload)
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

export const updateMemory = async (auth, payload) => {
  try {
    const memoryInstance = axiosInstances(auth.token)
    const response = await memoryInstance
      .put(`/api/memory`, payload)
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

export const deleteMemory = async (auth, id, payload) => {
  try {
    const memoryInstance = axiosInstances(auth.token)
    const response = await memoryInstance
      .delete(`/api/memory/${id}`, payload)
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
