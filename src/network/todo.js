import axiosInstances from './api'

export const getTodoList = async (auth) => {
  try {
    const todoInstance = axiosInstances(auth.token)
    const response = await todoInstance.get(`/api/todo`).then((response) => {
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

export const insertTodo = async (auth, payload) => {
  try {
    const todoInstance = axiosInstances(auth.token)
    const response = await todoInstance
      .post(`/api/todo`, payload)
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

export const updateTodo = async (auth, payload) => {
  try {
    const todoInstance = axiosInstances(auth.token)
    const response = await todoInstance
      .put(`/api/todo`, payload)
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
