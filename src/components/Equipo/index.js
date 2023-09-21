import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo= (props) =>{

 const {colaboradores, eliminarColaborador} = props
 
 const estiloFondo= {backgroundColor: props.colorSecundario}

 const estiloTitulo= {borderBottom: `4px solid ${props.colorPrimario}`}

 return <>
  {
   colaboradores.length > 0 &&
     <section className="equipo" style={estiloFondo}>
     <h3 style={estiloTitulo}>{props.equipo}</h3>
     <div className="colaboradores">
      {
       colaboradores.map( (colaborador, index) => <Colaborador    datos={colaborador} key={index} colorPrimario={props.colorPrimario} eliminarColaborador={eliminarColaborador}/>)
      }
     </div>
     </section>
  }
 </>
}

export default Equipo