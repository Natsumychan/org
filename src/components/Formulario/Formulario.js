import "./Formulario.css"
import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{
 const [nombre, setNombre]= useState("")
 const [puesto, setPuesto]= useState("")
 const [foto, setFoto]= useState("")
 const [equipo, setEquipo]= useState("")
 const manejarEnvio= (event) =>{
  event.preventDefault()
 }

 return <section className="formulario">
  <form onSubmit={manejarEnvio}>
   <h2>Rellena el formulario para crear el colaborador.</h2>
   <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" type="text" id="nombre" required={true} valor={nombre} setValor={setNombre}/>
   <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" type="text" id="puesto" required valor={puesto} setValor={setPuesto}/>
   <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" type="text" id="foto" required valor={foto} setValor={setFoto}/>
   < ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos} />
   < Boton texto="Crear colaborador" />
  </form>
 </section>
}

export default Formulario