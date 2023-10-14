import React from 'react'
import hexToRgba from 'hex-to-rgba'

function TitleCategory (props) {
  const obj = {
    backgroundColor: hexToRgba(props.colorPrimario, 0.6)
  }
  return (
    <div className='justify-center mx-96' style={obj}>
      <h1 className='text-6xl font-roboto text-center mx-auto my-5'>{props.titulo}</h1>
    </div>

  )
};
export default TitleCategory
