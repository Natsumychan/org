import "./ListaOpciones.css"

const ListaOpciones= (props) =>{
 const equipos= [
  "Programación","Front End","Data Science","Devops","UX y Diseño","Móvil","Innovación y Gestión"
 ]

 const manejarCambios= (event) =>{
  props.setValor(event.target.value)
 }

 return <div className="lista-opciones">
  <label htmlFor="equipos">Equipos</label>
  <select id="equipos" value={props.valor} onChange={manejarCambios}>
    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
   { equipos.map( (equipo, index) => <option key={index}> {equipo} </option>
    ) }
  </select>
 </div>
}

export default ListaOpciones