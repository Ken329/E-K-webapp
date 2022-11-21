import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

export default function Memo({updatedAt, createdAt, children}) {
  return (
    <div class="bg-white-500 shadow-lg shadow-white-500/50 rounded-md p-4">
      <Header />
      <p class="py-4 px-2 text-gray-800 italic break-words">{children}</p>
      <Footer updatedAt={updatedAt} createdAt={createdAt}/>
    </div>
  )
}

Memo.defaultProps = {
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
  children: PropTypes.string,
}
