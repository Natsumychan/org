import "./CampoTexto.css"

const CampoTexto = (props) =>{
 const placeholderModificado= `${props.placeholder}...`
 return <div className="campo-texto">
  <label for={props.id} >{props.titulo}</label>
  <input type={props.type} placeholder={placeholderModificado} id={props.id} />
 </div>
}

export default CampoTexto