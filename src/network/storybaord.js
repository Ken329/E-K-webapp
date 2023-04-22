import axiosInstances from './api'

export const getStoryboardList = async (auth) => {
  try {
    const storyBaordInstance = axiosInstances(auth.token)
    const response = await storyBaordInstance
      .get(`/api/storyboard`)
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

export const insertStoryBoard = async (auth, payload) => {
  try {
    const storyBaordInstance = axiosInstances(auth.token)
    const response = await storyBaordInstance
      .post(`/api/storyboard`, payload)
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
