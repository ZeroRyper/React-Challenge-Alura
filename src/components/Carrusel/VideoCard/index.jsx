import React from 'react'
import ButtonAction from '../../ButtonAction'

function VideoCard (props) {
  const { equipo, video } = props.datos
  const { eliminarColaborador,like } = props

  return (
    <div className='flex mx-2 c'>
      <div className='m-auto my-10'>
        <img src={video} alt={equipo} />
        <ButtonAction />
      </div>
    </div>
  )
}

export default VideoCard
