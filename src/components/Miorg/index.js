import { useState } from "react"
import "./Miorg.css"

const MiOrg = (props) => {
 //Estado - hooks
 //useState
 //useState
 //const [nombreVariable, funcionParaActualizarValor]= useState(valorInicial)
 // const manejarClick= () =>{
 //  console.log("Mostrar/Ocultar elemento")
 // }

 return <section className="orgSection">
  <h3 className="title">Mi organización</h3>
  <img src="/img/boton-add.png" alt="add" onClick={props.cambiarMostrar} />
 </section>
}

export default MiOrg