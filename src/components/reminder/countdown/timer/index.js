import PropTypes from 'prop-types'

export default function Timer(props) {
  return (
    <div className="h-20 w-20 mx-3 flex-col items-center content-center justify-center">
      <p className="w-full text-center mt-2">{props.date}</p>
      <p className="w-full text-center mt-1">{props.field}</p>
    </div>
  )
}

Timer.propTypes = {
  field: PropTypes.string,
  date: PropTypes.string,
}
