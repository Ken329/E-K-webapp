import PropTypes from 'prop-types'

export default function Countdown(props) {
  return (
    <div className="bg-blue-100 shadow-inner rounded-md flex-col relative">
      <p className="w-full text-center font-semibold text-md pb-10 pt-2 md:text-lg">
        {props.title}
      </p>
      <div className="w-full flex space-between mb-6 items-center justify-center pb-4">
        <img
          className="h-20 w-40"
          src="https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif"
        />
      </div>
      <p className="w-full text-center mb-2 font-semibold absolute bottom-0">
        {props.message}
      </p>
    </div>
  )
}

Countdown.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}
