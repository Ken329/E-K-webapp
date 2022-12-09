import { useState } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import { updateMemo } from '../../network/memo'

export default function Memo(props) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('')

  const onsubmit = async (event, id) => {
    event.preventDefault();

    const data = await updateMemo({ id, message: value })
    if (data.success) {
      props.updateFunc(data.data)
      setValue('')
      setEdit(false)
    } else {
      alert(data)
    }
  }
  return (
    <div class="relative bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4">
      <Header id={props.id} edit={setEdit} editValue={edit} updateFunc={props.updateFunc} deleteFunc={props.deleteFunc} />
      {
        !edit ?
          <>
            <p class="pt-4 pb-8 px-2 text-gray-800 italic break-words">{props.children}</p>
            <Footer updatedAt={props.updatedAt} createdAt={props.createdAt} />
          </>
          : <form onSubmit={event => onsubmit(event, props.id)}>
            <input
              type="textarea"
              class="block w-full p-4 mt-3 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
              defaultValue={props.children}
              onChange={event => setValue(event.target.value)}
            />
            <div class="mt-3 flex justify-center md:justify-end">
              <button type='submit' class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Update
              </button>
            </div>
          </form>
      }
    </div>
  )
}

Memo.defaultProps = {
  id: PropTypes.string,
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
  children: PropTypes.string,
  updateFunc: PropTypes.func,
  deleteFunc: PropTypes.func
}
