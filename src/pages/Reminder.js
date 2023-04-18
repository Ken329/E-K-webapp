import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Countdown from 'react-countdown'
import 'react-toastify/dist/ReactToastify.css'

import Loader from '../components/loader'
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import CountdownTimer from '../components/reminder/countdown'
import Success from '../components/reminder/success'
import Plus from '../components/reminder/plus'

import { reminderTransformation } from '../utils/helpers'
import { getReminderList } from '../network/reminder'

function Reminder() {
  const [ready, setReady] = useState(true)
  const [list, setList] = useState([])
  const [insertResponse, setInsertResponse] = useState({})
  const [deleteResponse, setDeleteResponse] = useState({})

  useEffect(async () => {
    const data = await getReminderList()
    if (data.success) {
      const transformedData = reminderTransformation(data.data)
      setList(transformedData)
      setReady(true)
    } else {
      toast.error(data)
    }
  }, [])

  useEffect(async () => {
    if (Object.keys(insertResponse).length !== 0) {
      const { message, list } = insertResponse
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      })
      const transformedData = reminderTransformation(list)
      setList(transformedData)
    }
  }, [insertResponse])

  useEffect(async () => {
    if (Object.keys(deleteResponse).length !== 0) {
      const { message, list } = deleteResponse
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      })
      const transformedData = reminderTransformation(list)
      setList(transformedData)
    }
  }, [deleteResponse])

  const renderer = ({ days, hours, minutes, completed }, data) =>
    completed && data.type !== 'recursion' ? (
      <Success message={data.message} title={data.title} />
    ) : (
      <CountdownTimer
        days={days}
        hours={hours}
        minutes={minutes}
        deleteFunc={setDeleteResponse}
        {...data}
      />
    )

  return (
    <>
      <Container>
        {ready ? (
          <>
            <Header />
            <div className="pt-8 pb-40 mx-auto grid grid-cols-1 gap-1 mx-2 px-2 overflow-y-auto sm:grid-cols-2 gap-2">
              <Plus insertFunc={setInsertResponse} />
              {list.map((data, index) => {
                return (
                  <Countdown
                    key={`countdown-${index}`}
                    date={new Date(data.date)}
                    renderer={(props) => renderer(props, data)}
                  />
                )
              })}
            </div>
            <Footer />
          </>
        ) : (
          <Loader />
        )}
        <ToastContainer />
      </Container>
    </>
  )
}
export default Reminder
