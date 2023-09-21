import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"

const Colaborador= (props) =>{
 const{nombre,puesto, foto,equipo} =props.datos
 const {eliminarColaborador}=props
 const estiloFondo= {backgroundColor: props.colorPrimario}
 return <div className="colaborador">
  
  <div className="encabezado" style={estiloFondo}>
   
   <img src={foto} alt={nombre}/>
   <AiFillCloseCircle onClick={eliminarColaborador} className="eliminar"/>
  </div>
  <div className="info">
   <h4> {nombre} </h4>
   <h5> {puesto} </h5>
  </div>
 </div>
}

export default Colaborador