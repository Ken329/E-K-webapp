import React from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <PuffLoader color="#4da2e0" size={150} />
    </div>
  )
}

export default Loader
