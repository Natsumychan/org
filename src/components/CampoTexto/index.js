import "./CampoTexto.css"

const CampoTexto = (props) =>{
 const placeholderModificado= `${props.placeholder}...`
 return <div className="campo-texto">
  <label htmlFor={props.id} >{props.titulo}</label>
  <input type={props.type} placeholder={placeholderModificado} id={props.id} required={props.required} />
 </div>
}

export default CampoTexto