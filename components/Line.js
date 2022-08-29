import React from 'react'

const Line = () => {
  return (
    <div>
      <div className="relative my-10">
        <hr className=" bg-gray-500" />
        <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}

export default Line