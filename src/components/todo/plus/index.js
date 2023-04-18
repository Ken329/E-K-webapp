import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PlusIcon } from '@heroicons/react/24/outline'

import { insertTodo } from '../../../network/todo'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [value, setValue] = useState('')

  const onsubmit = async (event) => {
    event.preventDefault()

    const data = await insertTodo({ message: value, checked: false })
    if (data.success) {
      props.insertFunc(data.data)
      setValue('')
      setClick(false)
    } else {
      alert(data)
    }
  }
  return (
    <div className="bg-blue-100 shadow-inner rounded-md p-4 my-5 mx-2 flex items-center justify-center cursor-pointer md:mx-0">
      {!click ? (
        <PlusIcon
          class="w-10 h-10 text-blue-300 cursor-pointer"
          onClick={() => setClick(true)}
        />
      ) : (
        <>
          <form onSubmit={onsubmit} className="flex w-full">
            <input
              type="textarea"
              className="block w-4/5 p-4 mt-3 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none mr-2 md:text-md w-full focus:border-gray-400"
              onChange={(event) => setValue(event.target.value)}
              required
            />
            <div className="ml-3 mt-3 flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

Plus.propTypes = {
  insertFunc: PropTypes.func,
}
