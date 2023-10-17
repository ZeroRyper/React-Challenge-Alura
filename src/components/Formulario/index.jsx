import { React, useState } from 'react'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
// https://github.com/zeroryper.png
function Formulario (props) {
  const [video, actualizarVideo] = useState('')
  const [equipo, actualizarEquipo] = useState('')

  const [titulo, actualizarTitulo] = useState('')
  const [color, actualizarColor] = useState('')

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Manejar el envio', e)
    const datosAEnviar = {
      equipo,
      video
    }
    registrarColaborador(datosAEnviar)
  }
  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({ titulo, colorPrimario: color })
  }

  return (
    <section className='flex'>
      <form onSubmit={manejarEnvio} className='flex-col w-9/12 p-5 mx-10 bg-gray-600 rounded-lg'>
        <Campo
          titulo='Video'
          placeholder='https://www.youtube.com/embed/'
          required
          valor={video}
          actualizarValor={actualizarVideo}
        />
        <ListaOpciones
          valor={equipo}
          actualizarValor={actualizarEquipo}
          equipos={props.equipos}
        />
        <button className='flex my-3 px-2 rounded-sm bg-white'>Registrar</button>
      </form>
      <form onSubmit={manejarNuevoEquipo} className='flex-col w-9/12 p-5 mx-10 bg-gray-600 rounded-lg'>
        <Campo
          titulo='Titulo'
          placeholder='Ingresar titulo'
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo='Color'
          placeholder='Ingresar el color en Hex'
          required
          valor={color}
          actualizarValor={actualizarColor}
          type='color'
        />
        <button className='flex my-3 px-2 rounded-sm bg-white'>Registrar</button>
      </form>
    </section>

  )
}

export default Formulario
