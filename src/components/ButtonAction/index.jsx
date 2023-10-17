import React from 'react'

function ButtonAction ({ src }) {
  return (
    <div className='flex justify-center'>
      <a href={src} className='flex justify-center bg-red-700 text-white py-5 w-full rounded-b-lg'>Get Started</a>
    </div>
  )
}

export default ButtonAction
