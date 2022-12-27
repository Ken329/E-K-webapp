import {
    TrashIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

export default function Countdown(props) {
    return (
        <div class="bg-blue-100 shadow-inner rounded-md flex-col relative">
            <div class="absolute top-0 flex w-full">
                <div class="w-1/2 p-1"><ArrowPathIcon class="w-4 h-4 text-blue-300 md:w-6 md:h-6" /></div>
                <div class="w-1/2 p-1 flex justify-end">
                    <TrashIcon class="w-4 h-4 cursor-pointer mx-2 text-blue-300 md:w-6 md:h-6" />
                </div>
            </div>
            <p class="w-full text-center font-semibold text-md pb-10 md:text-lg">{props.title}</p>
            <div class="w-full flex space-between mb-6 items-center justify-center pb-4">
                <img class="h-20 w-40" src='https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif' />
            </div>
            <p class="w-full text-center mb-2 font-semibold absolute bottom-0">
                {props.message}
            </p>
        </div>
    )
}

Countdown.defaultProps = {
    id: PropTypes.string,
    message: PropTypes.string,
    updateFunc: PropTypes.func,
    deleteFunc: PropTypes.func
}
