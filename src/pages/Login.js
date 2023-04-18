import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import { login } from '../network/login'
import useAuth from '../hooks/useAuth'

function Welcome() {
  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const [anniversary, setAnniversary] = useState('')

  const onsubmit = async (event) => {
    event.preventDefault()

    const data = await login({ date: anniversary })
    if (data.success) {
      if (data.data.loggedIn) {
        setAuth({ token: data.data.token })
        navigate(`/memo`)
      } else {
        toast.error(data.data.message)
      }
    } else {
      toast.error(data)
    }
  }

  return (
    <>
      <Container>
        <Header />
        <form className="flex flex-col items-center mt-20 px-2" onSubmit={onsubmit}>
          <label
            className="text-lg block text-grey-darker text-sm font-bold mb-10"
            htmlFor="username"
          >
            Our Anniversary
          </label>
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 mb-10 ml-2 mr-2 text-grey-darker"
            id="username"
            type="date"
            onChange={(event) => setAnniversary(event.target.value)}
          />
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <ToastContainer />
        <Footer />
      </Container>
    </>
  )
}
export default Welcome
