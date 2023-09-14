import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
 const placeholderModificado= `${props.placeholder}...`

 const manejarCambio= (event) =>{
  props.setValor(event.target.value)
 }

 return <div className="campo-texto">
  <label htmlFor={props.id} >{props.titulo}</label>
  <input type={props.type} placeholder={placeholderModificado} id={props.id} required={props.required} value={props.valor} onChange={manejarCambio} />
 </div>
}

export default CampoTexto