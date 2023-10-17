import React from 'react'
import TitleCategory from '../TitleCategory'
import VideoCard from './VideoCard'
import Slider from 'react-slick'
function Carrusel (props) {
  const { colorPrimario, titulo } = props.datos
  const { colaboradores } = props

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
    ]
  }
  return (
    colaboradores.length > 0 &&
      <section>
        <TitleCategory colorPrimario={colorPrimario} titulo={titulo} />
        <div className='my-10 mx-10 rounded-xl' style={{ backgroundColor: colorPrimario }}>
          <Slider {...settings}>
            {
                  colaboradores.map((colaborador, index) => <VideoCard
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                                                            />)
              }
          </Slider>
        </div>

      </section>
  )
}

export default Carrusel
