import { useState } from 'react'
import PropTypes from 'prop-types'

import { getMemoryById } from '../../network/memory'
import useAuth from '../../hooks/useAuth'

export default function Plus(props) {
  const [click, setClick] = useState(false)
  const [answer, setAnswer] = useState('')

  const { auth } = useAuth()

  const onsubmit = async (event) => {
    event.preventDefault()

    const data = await getMemoryById(auth, { id: props.id, answer })
    if (data.success) {
      props.answerFunc(data.data)
      setAnswer('')
      setClick(false)
    } else {
      alert(data)
    }
  }

  return (
    <form
      onSubmit={onsubmit}
      className={
        'bg-blue-100 shadow-lg shadow-white-500/50 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col items-center justify-center'
      }
    >
      <h3 className="w-full text-center font-semibold text-md text-gray-500 mt-2 md:text-lg">
        {props.name}
      </h3>
      <h3 className="w-full text-center font-semibold text-md text-gray-700 mt-4 md:text-lg">
        {props.question}
      </h3>
      {!click ? (
        <button
          type="button"
          className="bg-blue-400 mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setClick(true)}
        >
          Enter Password
        </button>
      ) : (
        <>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"
            onChange={(event) => setAnswer(event.target.value)}
            placeholder={`hint: ${props.hint}`}
            required
          />
          <button
            type="submit"
            className="bg-blue-400 mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </>
      )}
    </form>
  )
}

Plus.propTypes = {
  answerFunc: PropTypes.func,
  idFunc: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  question: PropTypes.string,
  hint: PropTypes.string,
}
