import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador= (props) =>{
 const{nombre,puesto, foto,equipo,id, fav} =props.datos
 const {eliminarColaborador, like}=props
 const estiloFondo= {backgroundColor: props.colorPrimario}
 return <div className="colaborador">
  
  <div className="encabezado" style={estiloFondo}>
   
   <img src={foto} alt={nombre}/>
   <AiFillCloseCircle onClick={()=> eliminarColaborador(id)} className="eliminar"/>
  </div>
  <div className="info">
   <h4> {nombre} </h4>
   <h5> {puesto} </h5>
   {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
   
  </div>
 </div>
}

export default Colaborador