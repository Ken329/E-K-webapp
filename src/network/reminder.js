import axiosInstances from './api'

export const getReminderList = async (auth) => {
  try {
    const reminderInstance = axiosInstances(auth.token)
    const response = await reminderInstance
      .get(`/api/reminder`)
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

export const insertReminder = async (auth, payload) => {
  try {
    const reminderInstance = axiosInstances(auth.token)
    const response = await reminderInstance
      .post(`/api/reminder`, payload)
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

export const deleteReminder = async (auth, id) => {
  try {
    const reminderInstance = axiosInstances(auth.token)
    const response = await reminderInstance
      .delete(`/api/reminder/${id}`)
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
