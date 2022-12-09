import { useState } from 'react'
import {
  PlusIcon, ClipboardDocumentIcon
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import { insertMemo } from '../../../network/memo'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [value, setValue] = useState('')

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = await insertMemo({ message: value })
    if (data.success) {
      props.insertFunc(data.data)
      setValue('')
      setClick(false)
    } else {
      alert(data)
    }
  }

  return (
    <div class={!click ? "bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col items-center justify-center" : "bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col"}>
      {
        !click
          ? <PlusIcon class="w-10 h-10 text-blue-300 cursor-pointer" onClick={() => setClick(true)} />
          : <>
            <form onSubmit={onsubmit}>
              <div class="bg-white-500 flex"><ClipboardDocumentIcon class="h-6 w-6 text-blue-300" /></div>
              <input
                type="textarea"
                class="block w-full p-4 mt-3 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={event => setValue(event.target.value)}
                required
              />
              <div class="mt-3 flex justify-center md:justify-end">
                <button type='submit' class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                  Submit
                </button>
              </div>
            </form>
          </>
      }
    </div>
  )
}

Plus.defaultProps = {
  insertFunc: PropTypes.func
}