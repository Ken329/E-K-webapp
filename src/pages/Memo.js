import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../components/loader';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import Memo from '../components/memo'
import Plus from '../components/memo/plus'

import { getMemoList } from '../network/memo';

function Welcome() {
  const [ready, setReady] = useState(false)
  const [list, setList] = useState([])
  const [insertResponse, setInsertResponse] = useState({})
  const [updateResponse, setUpdateResponse] = useState({})
  const [deleteResponse, setDeleteResponse] = useState({})

  useEffect(async () => {
    const data = await getMemoList()
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

  useEffect(async () => {
    if (Object.keys(deleteResponse).length !== 0) {
      const { message, list } = deleteResponse
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      });
      setList(list)
    }
  }, [deleteResponse])

  return (
    <>
      <Container>
        {
          ready ?
            <>
              <Header />
              <div class="pt-8 pb-40 mx-auto grid grid-cols-1 gap-1 mx-2 px-2 overflow-y-auto lg:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
                <Plus insertFunc={setInsertResponse} />
                {
                  list.map(({ id, updatedAt, createdAt, message }) => {
                    return <Memo id={id} updatedAt={updatedAt} createdAt={createdAt} updateFunc={setUpdateResponse} deleteFunc={setDeleteResponse}>{message}</Memo>
                  })
                }
              </div>
              <Footer />
              <ToastContainer />
            </>
            : <Loader />
        }
      </Container>
    </>
  )
}
export default Welcome;
