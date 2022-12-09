import react, { useState, useEffect } from 'react'
import {
    TrashIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import Timer from './timer'
import { deleteReminder } from '../../../network/reminder'

export default function Countdown(props) {

    const onclick = async (id) => {
        const data = await deleteReminder(id)
        if (data.success) {
            props.deleteFunc(data.data)
        } else {
            alert(data)
        }
    }

    return (
        <div class="bg-blue-100 shadow-inner rounded-md flex-col relative">
            <div class="absolute top-0 flex w-full">
                {
                    props.type === "recursion"
                        ? <div class="w-1/2 p-1"><ArrowPathIcon class="w-4 h-4 text-blue-300 md:w-6 md:h-6" /></div>
                        : <></>
                }
                <div class={props.type === "recursion" ? "w-1/2 p-1 flex justify-end" : "w-full p-1 flex justify-end"}>
                    <TrashIcon class="w-4 h-4 cursor-pointer mx-2 text-blue-300 md:w-6 md:h-6" onClick={() => onclick(props.id)} />
                </div>
            </div>
            <p class="w-full text-center font-semibold text-md pt-4 md:text-lg">{props.title}</p>
            <div class={props.years && props.years > 0 ? "w-full flex space-between mt-5 mb-6 items-center justify-center" : "w-full flex space-between mt-5 items-center justify-center"}>
                <Timer field={"DAYS"} date={props.days} />
                <Timer field={"HOURS"} date={props.hours} />
                <Timer field={"MINUTES"} date={props.minutes} />
            </div>
            {
                props.years > 0
                    ? <p class="w-full text-center mb-2 font-semibold absolute bottom-0">
                        {props.years}{props.message}
                    </p>
                    : <></>
            }
        </div>
    )
}

Countdown.defaultProps = {
    id: PropTypes.string,
    title: PropTypes.string,
    days: PropTypes.string,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
    years: PropTypes.string,
    message: PropTypes.string,
    deleteFunc: PropTypes.func
}
