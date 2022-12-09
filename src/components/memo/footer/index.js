import PropTypes from 'prop-types'

export default function Footer({ createdAt, updatedAt }) {
  return (
    <div class="absolute bottom-0 left-0 w-full flex items-center justify-between p-2">
      <p class="text-xs text-gray-400">Created At: {createdAt}</p>
      <p class="text-xs text-gray-400">Updated At: {updatedAt}</p>
    </div>
  )
}


Footer.defaultProps = {
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
}

