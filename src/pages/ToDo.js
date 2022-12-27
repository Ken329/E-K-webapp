import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../components/loader';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import List from '../components/todo/list';
import Plus from '../components/todo/plus';

import { getTodoList } from '../network/todo';

function ToDoList() {
  const [ready, setReady] = useState(false)
  const [list, setList] = useState([])
  const [insertResponse, setInsertResponse] = useState({})
  const [updateResponse, setUpdateResponse] = useState({})

  useEffect(async () => {
    const data = await getTodoList()
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
        position: toast.POSITION.TOP_RIGHT
      });
      setList(list)
    }
  }, [insertResponse])

  useEffect(async () => {
    if (Object.keys(updateResponse).length !== 0) {
      const { message, list } = updateResponse
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      });
      setList(list)
    }
  }, [updateResponse])

  return (
    <>
      <Container>
        {
          ready ?
            <>
              <Header />
              <div class="pt-8 pb-40 mx-auto">
                <Plus insertFunc={setInsertResponse} />
                {
                  list.map(({ id, message, checked }) => {
                    return <List id={id} children={message} checked={checked} updateFunc={setUpdateResponse} />
                  })
                }
              </div>
              <Footer />
            </>
            : <Loader />
        }
        <ToastContainer />
      </Container>
    </>
  )
}
export default ToDoList;
