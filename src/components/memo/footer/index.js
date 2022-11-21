import PropTypes from 'prop-types'

export default function Footer({createdAt, updatedAt}) {
  return (
    <div class="bg-white-500 flex items-center justify-between">
      <p class="text-xs text-gray-400">Created At: {createdAt}</p>
      <p class="text-xs text-gray-400">Updated At: {updatedAt}</p>
    </div>
  )
}


Footer.defaultProps = {
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,    
}
  
