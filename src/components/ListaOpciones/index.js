import "./ListaOpciones.css"

const ListaOpciones= (props) =>{

 const manejarCambios= (event) =>{
  props.setValor(event.target.value)
 }

 return <div className="lista-opciones">
  <label htmlFor="equipos">Equipos</label>
  <select id="equipos" value={props.valor} onChange={manejarCambios}>
    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
   { props.equipos.map( (equipo, index) => <option key={index}> {equipo} </option>
    ) }
  </select>
 </div>
}

export default ListaOpciones