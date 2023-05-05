import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Loader from '../components/loader'
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import Plus from '../components/storyboard/plus'

import { getStoryboardList } from '../network/storybaord'
import useAuth from '../hooks/useAuth'

function StoryBoard() {
  const [ready, setReady] = useState(false)
  const [list, setList] = useState([])
  const [insertResponse, setInsertResponse] = useState({})

  const { auth } = useAuth()

  useEffect(async () => {
    const data = await getStoryboardList(auth)
    if (data.success) {
      setList(data.data)
      setReady(true)
    } else {
      alert(data)
    }
  }, [])

  useEffect(async () => {
    if (Object.keys(insertResponse).length !== 0) {
      const { message, list } = insertResponse
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      })
      setList(list)
    }
  }, [insertResponse])

  return (
    <>
      <Container>
        {ready ? (
          <>
            <Header />
            <div className="pt-8 pb-40 mx-auto flex flex-col items-center overflow-y-auto">
              <div className="w-full flex flex-col px-2 md:w-1/2">
                <Plus insertFunc={setInsertResponse} />
                <div key={`storybaord-${0}`} className="w-10/12 md:w-10/12">
                  <p className="text-base font-bold md:text-lg">More To GO</p>
                  <div className="border-l-2 ml-10 mt-2 pb-4 pl-4 border-indigo-600"></div>
                </div>
                {list.map((data, index) => (
                  <div
                    key={`storybaord-${index + 1}`}
                    className="w-10/12 md:w-10/12"
                  >
                    <p className="text-base font-bold md:text-lg">
                      {data.date}
                    </p>
                    <div className="border-l-2 ml-10 mt-2 pb-2 pl-4 border-indigo-600">
                      <h3 className="text-gray-700 text-base text-center font-bold md:text-lg md:text-left">
                        {data.title}
                      </h3>
                      <div className="w-full flex flex-col items-center pt-2 md:flex-row">
                        <img
                          className="w-20 h-20 rounded-lg shadow-2xl md:w-3/12 md:h-32"
                          src={data.image}
                          alt=""
                        />
                        <p className="w-full mt-2 ml-0 text-sm md:ml-4 md:mt-0 sm:w-9/12">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
            <ToastContainer />
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  )
}
export default StoryBoard
