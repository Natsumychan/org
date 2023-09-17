import "./equipo.css"

const Equipo= (props) =>{

 const estiloFondo= {backgroundColor: props.colorSecundario}

 const estilotitulo= {borderBottom: `4px solid ${props.colorPrimario}`}

 return <section className="equipo" style={estiloFondo}>
  <h3 style={estilotitulo}>{props.equipo}</h3>
  <div className="colaboradores"></div>
 </section>
}

export default Equipo