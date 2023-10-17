import React from 'react'
import hexToRgba from 'hex-to-rgba'

function TitleCategory (props) {
  const obj = {
    backgroundColor: hexToRgba(props.colorPrimario, 0.6)
  }
  return (
    <div>
      <h1 className='flex justify-center text-6xl font-roboto my-5 w-1/2 mx-auto rounded-lg' style={obj}>{props.titulo}</h1>
    </div>

  )
};
export default TitleCategory
