import "./equipo.css"
import Colaborador from "../Colaborador"
// import hexToRgba from "hex-to-rgba"
//hexToRgba(props.colorPrimario,0.6
const Equipo= (props) =>{

 const {colaboradores, eliminarColaborador, actualizarColor} = props
 
 const estiloFondo= {backgroundColor: props.colorSecundario}

 const estiloTitulo= {borderBottom: `4px solid ${props.colorPrimario}`}

 return <>
  {
   colaboradores.length > 0 &&
     <section className="equipo" style={estiloFondo}>
      <input
        type="color"
        className="input-color"
        value={props.colorPrimario}
        onChange={(event)=>{
          actualizarColor(event.target.value, props.equipo)
        }}
      />
     <h3 style={estiloTitulo}>{props.equipo}</h3>
     <div className="colaboradores">
      {
       colaboradores.map( (colaborador, index) => <Colaborador    datos={colaborador} key={index} colorPrimario={props.colorPrimario} eliminarColaborador={eliminarColaborador}
       actualizarColor={actualizarColor}
       />)
      }
     </div>
     </section>
  }
 </>
}

export default Equipo