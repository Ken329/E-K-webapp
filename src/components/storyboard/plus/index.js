import { useState } from 'react'
import { PlusIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import { insertStoryBoard } from '../../../network/storybaord'
import { fileToBase64 } from '../../../utils/helpers'
import useAuth from '../../../hooks/useAuth'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [pictures, setPictures] = useState(null)

  const { auth } = useAuth()

  const onsubmit = async (event) => {
    event.preventDefault()

    let pictureList = []

    if (pictures.length > 1) {
      alert('Only one pictures is allow to be insert')
    } else {
      for (let i = 0; i < pictures.length; i++) {
        const result = await fileToBase64(pictures[i])
        pictureList.push(result)
      }

      const data = await insertStoryBoard(auth, {
        title,
        date,
        description,
        picture: pictureList,
      })
      if (data.success) {
        props.insertFunc(data.data)
        setTitle('')
        setDate('')
        setDescription('')
        setPictures(null)
        setClick(false)
      } else {
        alert(data)
      }
    }
  }

  return (
    <div
      className={
        !click
          ? 'w-full bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col mb-4 items-center justify-center'
          : 'w-full bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col mb-4'
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
              <label className="ml-2 text-sm md:text-md">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="ml-2 text-sm md:text-md">Description</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
                onChange={(event) => setDescription(event.target.value)}
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
