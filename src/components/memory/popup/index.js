import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { updateMemory, deleteMemory } from '../../../network/memory'

export default function Popup(props) {
    const { id, name, question, password, hint, images } = props.data

    const [editClick, setEditClick] = useState(false)
    const [Question, setQuestion] = useState(question)
    const [Password, setPassword] = useState(password)
    const [Hint, setHint] = useState(hint)

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = await updateMemory({ id, question: Question, password: Password, hint: Hint })
        if (data.success) {
            props.updateFunc(data.data)
            props.onCloseFunc(false)
        } else {
            alert(data)
        }
    }

    const onDelete = async (event) => {
        event.preventDefault();

        const data = await deleteMemory(id, { name, length: images.length })
        if (data.success) {
            props.deleteFunc(data.data)
            props.onCloseFunc(false)
        } else {
            alert(data)
        }
    }

    return (
        <div tabindex="-1" aria-hidden="true" class="w-full h-full fixed top-0 left-0 right-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal">
            <div class="w-full h-full md:w-2/5 md: h-2/5">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <form onSubmit={onSubmit} class="flex flex-col items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <div class="flex items-center">
                            <h3 class="text-md font-semibold text-gray-900 ml-2 dark:text-white md:text-ld">
                                Title:
                            </h3>
                            <input
                                class="ml-2 p-2 mt-1 text-gray-800 italic border rounded-lg text-sm outline-none md:text-md"
                                readonly="readonly"
                                defaultValue={name}
                            />
                        </div>
                        <div class="flex items-center">
                            <h3 class="text-md font-semibold text-gray-900 ml-2 dark:text-white md:text-ld">
                                Question:
                            </h3>
                            {
                                editClick
                                    ? <input
                                        class={"ml-2 p-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"}
                                        onChange={event => setQuestion(event.target.value)}
                                        defaultValue={question}
                                    />
                                    : <input
                                        class="ml-2 p-2 mt-1 text-gray-800 italic border rounded-lg text-sm outline-none md:text-md"
                                        readonly="readonly"
                                        defaultValue={question}

                                    />
                            }
                        </div>
                        <div class="flex items-center">
                            <h3 class="text-md font-semibold text-gray-900 ml-2 dark:text-white md:text-ld">
                                Answer:
                            </h3>
                            {
                                editClick
                                    ? <input
                                        class={"ml-2 p-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"}
                                        onChange={event => setPassword(event.target.value)}
                                        defaultValue={password}
                                    />
                                    : <input
                                        class="ml-2 p-2 mt-1 text-gray-800 italic border rounded-lg text-sm outline-none md:text-md"
                                        readonly="readonly"
                                        defaultValue={password}

                                    />
                            }
                        </div>
                        <div class="flex items-center">
                            <h3 class="text-md font-semibold text-gray-900 ml-2 dark:text-white md:text-ld">
                                Hint:
                            </h3>
                            {
                                editClick
                                    ? <input
                                        class={"ml-2 p-2 mt-1 text-gray-800 italic border border-gray-300 rounded-lg bg-gray-50 text-sm outline-none md:text-md focus:border-gray-400"}
                                        onChange={event => setHint(event.target.value)}
                                        defaultValue={hint}
                                    />
                                    : <input
                                        class="ml-2 p-2 mt-1 text-gray-800 italic border rounded-lg text-sm outline-none md:text-md"
                                        readonly="readonly"
                                        defaultValue={hint}

                                    />
                            }
                        </div>
                        {
                            editClick ? <button
                                type="submit"
                                class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-2 ml-2"
                            >
                                Submit
                            </button>
                                : <></>
                        }
                        <button
                            type="button"
                            onClick={e => props.onCloseFunc(false)}
                            class="absolute top-0 right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </form>
                    <div class="p-6 mx-auto grid grid-cols-2 gap-2 mx-2 px-2 overflow-y-auto lg:grid-cols-4 gap-4 md:grid-cols-3 gap-3">
                        {
                            images.map((img) => {
                                return <div class="p-2 flex justify-center">
                                    <img class="w-8/10 h-full rounded-xl" src={img} />
                                </div>
                            })
                        }
                    </div>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            onClick={e => setEditClick(true)}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={e => onDelete(e)}
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Popup.defaultProps = {
    onCloseFunc: PropTypes.func,
    updateFunc: PropTypes.func,
    deleteFunc: PropTypes.func,
    data: PropTypes.object
}
