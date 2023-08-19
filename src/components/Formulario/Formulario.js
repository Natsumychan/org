import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () =>{
 return <section className="formulario">
  <form>
   <h2>Rellena el formulario para crear el colaborador.</h2>
   <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" type="text" id="nombre"/>
   <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" type="text" id="puesto"/>
   <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" type="text" id="foto"/>
  </form>
 </section>
}

export default Formulario