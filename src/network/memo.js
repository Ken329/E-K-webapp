import axiosInstances from './api'

export const getMemoList = async (auth) => {
  try {
    const memoInstance = axiosInstances(auth.token)
    const response = await memoInstance.get(`/api/memo`).then((response) => {
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

export const insertMemo = async (auth, payload) => {
  try {
    const memoInstance = axiosInstances(auth.token)
    const response = await memoInstance
      .post(`/api/memo`, payload)
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

export const updateMemo = async (auth, payload) => {
  try {
    const memoInstance = axiosInstances(auth.token)
    const response = await memoInstance
      .put(`/api/memo`, payload)
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

export const deleteMemo = async (auth, id) => {
  try {
    const memoInstance = axiosInstances(auth.token)
    const response = await memoInstance
      .delete(`/api/memo/${id}`)
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
