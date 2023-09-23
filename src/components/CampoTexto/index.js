import "./CampoTexto.css"

const CampoTexto = (props) =>{
 const {placeholder,id,titulo,type ="text",required,valor, clase = "campo-texto"}=props
 const placeholderModificado= `${placeholder}...`

 const manejarCambio= (event) =>{
  props.setValor(event.target.value)
 }

 return <div className={clase}>
  <label htmlFor={id} >{titulo}</label>
  <input type={type} placeholder={placeholderModificado} id={props.id} required={required} value={valor} onChange={manejarCambio} />
 </div>
}

export default CampoTexto