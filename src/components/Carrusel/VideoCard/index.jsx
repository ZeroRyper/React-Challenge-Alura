import React from 'react'
import ButtonAction from '../../ButtonAction'

function VideoCard (props) {
  const { equipo, video } = props.datos

  return (
    <div className='flex justify-center mx-2 c'>
      <div className='mx-4 my-10 '>
        <iframe className='rounded-t-lg' width='100%' height='300px' src={video} alt={equipo} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen='1' />
        <ButtonAction src={video} />
      </div>
    </div>
  )
}

export default VideoCard
