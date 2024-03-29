import { useState } from 'react'
import { PlusIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import { insertMemory } from '../../../network/memory'
import { fileToBase64 } from '../../../utils/helpers'
import useAuth from '../../../hooks/useAuth'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')
  const [password, setPassword] = useState('')
  const [hint, setHint] = useState('')
  const [pictures, setPictures] = useState(null)

  const { auth } = useAuth()

  const onsubmit = async (event) => {
    event.preventDefault()

    let pictureList = []

    for (let i = 0; i < pictures.length; i++) {
      const result = await fileToBase64(pictures[i])
      pictureList.push(result)
    }

    const data = await insertMemory(auth, {
      name,
      question,
      password,
      hint,
      pictures: pictureList,
    })
    if (data.success) {
      props.insertFunc(data.data)
      setName('')
      setPassword('')
      setHint('')
      setPictures(null)
      setClick(false)
    } else {
      alert(data)
    }
  }

  return (
    <div
      className={
        !click
          ? 'bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col items-center justify-center'
          : 'bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col'
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
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Memory Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Question</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setQuestion(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Hint</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setHint(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Pictures</label>
              <input
                type="file"
                multiple
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setPictures(event.target.files)}
                required
              />
            </div>
            <div className="mt-4 flex justify-center md:justify-end">
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
