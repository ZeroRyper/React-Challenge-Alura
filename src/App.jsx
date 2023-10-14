import React, { useState } from 'react'
import Logo from './components/Logo'
import Carrusel from './components/Carrusel'
import Formulario from './components/Formulario'
import { v4 as uuid } from 'uuid'
import './index.css'

export default function App () {
  const [mostrarFormulario] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: 'Programacion',
      video: 'https://github.com/zeroryper.png'
    },
    {
      equipo: 'Programacion',
      video: 'https://github.com/zeroryper.png'
    },
    {
      equipo: 'Programacion',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Programacion',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Data Science',
      video: 'https://github.com/zeroryper.png'
    },
    {
      equipo: 'Data Science',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Data Science',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Data Science',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Data Science',
      video: 'https://github.com/christianpva.png'
    },
    {
      equipo: 'Front End',
      video: 'https://github.com/christianpva.png'
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programacion',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: 'bg-[#F0F8E2'
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }
  ])
  console.log(equipos)

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  return (
    <div className='reset=all'>
      <Logo />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
                            />}
      {equipos.map((equipo, key) => (
        <Carrusel
          datos={equipo}
          key={key}
          actualizarColor={actualizarColor}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
      ))}

    </div>
  )
}
