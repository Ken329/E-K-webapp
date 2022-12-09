import PropTypes from 'prop-types'

export default function Timer(props) {
    return (
        <div class="h-20 w-20 mx-3 flex-col items-center content-center justify-center">
            <p class="w-full text-center mt-2">{props.date}</p>
            <p class="w-full text-center mt-1">{props.field}</p>
        </div>
    )
}

Timer.defaultProps = {
    field: PropTypes.string,
    date: PropTypes.string
}