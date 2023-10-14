const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }
  return (
    <div className='lista-opciones'>
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio} className='flex mx-auto my-3 px-2 rounded-sm w-full'>
        <option value='' disabled defaultValue='' hidden>Seleccionar Equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
      </select>
    </div>
  )
}
export default ListaOpciones
