import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo= (props) =>{

 const estiloFondo= {backgroundColor: props.colorSecundario}

 const estilotitulo= {borderBottom: `4px solid ${props.colorPrimario}`}

 return <section className="equipo" style={estiloFondo}>
  <h3 style={estilotitulo}>{props.equipo}</h3>
  <div className="colaboradores">
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
   <Colaborador/>
  </div>
 </section>
}

export default Equipo