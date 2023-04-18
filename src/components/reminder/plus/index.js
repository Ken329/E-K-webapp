import { useState } from 'react'
import { PlusIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import { insertReminder } from '../../../network/reminder'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [recursion, setRecurssion] = useState('')

  const onsubmit = async (event) => {
    event.preventDefault()

    const type = recursion === 'False' ? 'single' : 'recursion'

    const data = await insertReminder({ title, date, message, type })
    if (data.success) {
      props.insertFunc(data.data)
      setTitle('')
      setDate('')
      setMessage('')
      setRecurssion('')
      setClick(false)
    } else {
      alert(data)
    }
  }

  return (
    <div
      className={
        !click
          ? 'bg-blue-100 shadow-inner rounded-md flex items-center justify-center p-2'
          : 'bg-blue-100 shadow-inner rounded-md flex-col p-2'
      }
    >
      {!click ? (
        <PlusIcon
          class="w-10 h-10 text-blue-300 cursor-pointer"
          onClick={() => setClick(true)}
        />
      ) : (
        <>
          <form onSubmit={onsubmit}>
            <div className="bg-white-500 flex">
              <ClipboardDocumentIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div className="mt-2">
              <label
                htmlFor="title"
                className="block m-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 focus:border-gray-400 block w-full p-2.5"
                placeholder="Enter your reminder title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="date"
                className="block m-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 focus:border-gray-400 block w-full p-2.5"
                placeholder="Enter your reminder date"
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="message"
                className="block m-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 focus:border-gray-400 block w-full p-2.5"
                placeholder="Enter your reminder message"
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="message"
                className="block m-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Recursion
              </label>
              <div className="relative">
                <select
                  className="bg-gray-50 appearance-none border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 focus:border-gray-400 block w-full p-2.5"
                  id="grid-state"
                  onChange={(event) => setRecurssion(event.target.value)}
                >
                  <option>True</option>
                  <option>False</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-center md:justify-end">
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
