import "./Formulario.css"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{
 const [nombre, setNombre]= useState("")
 const [puesto, setPuesto]= useState("")
 const [foto, setFoto]= useState("")
 const [equipo, setEquipo]= useState("")

 const [titulo, setTitulo] =useState("")
 const [color, setColor]= useState("")

 const {registrarColaborador, crearEquipo} =props

 const manejarEnvio= (event) =>{
  event.preventDefault()
  let datosAEnviar= {
   id: uuidv4(),
   nombre,
   puesto,
   foto,
   equipo
  }
  registrarColaborador(datosAEnviar)
 }

 const manejarNuevoEquipo = (event) =>{
  event.preventDefault()
  crearEquipo({titulo, colorPrimario:color})
 }

 return <section className="formulario">
  <form onSubmit={manejarEnvio}>
   <h2>Rellena el formulario para crear el colaborador.</h2>
   <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" id="nombre" required={true} valor={nombre} setValor={setNombre}/>
   <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" id="puesto" required valor={puesto} setValor={setPuesto}/>
   <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"  id="foto" required valor={foto} setValor={setFoto}/>
   < ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos} />
   < Boton texto="Crear colaborador" />
  </form>
  <form onSubmit={manejarNuevoEquipo}>
   <h2>Rellena el formulario para crear el equipo.</h2>
   <CampoTexto titulo="Titulo" placeholder="Ingresar titulo"  id="titulo" required={true} valor={titulo} setValor={setTitulo}/>
   <CampoTexto titulo="Color" placeholder="#000" type="color" id="color" required valor={color} setValor={setColor} clase="campo-texto campo-color"/>
   < Boton texto="Crear equipo" />
   </form>
 </section>
}

export default Formulario