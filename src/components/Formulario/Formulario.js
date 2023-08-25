import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

 const manejarEnvio= (event) =>{
  event.preventDefault()
 }

 return <section className="formulario">
  <form onSubmit={manejarEnvio}>
   <h2>Rellena el formulario para crear el colaborador.</h2>
   <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" type="text" id="nombre"/>
   <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" type="text" id="puesto"/>
   <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" type="text" id="foto"/>
   < ListaOpciones />
   < Boton texto="Crear colaborador" />
  </form>
 </section>
}

export default Formulario