const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}... `

  const { type = 'text' } = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        className='flex mx-auto my-3 px-2 rounded-sm w-full'
      />
    </div>
  )
}
export default Campo
