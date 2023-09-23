import "./equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo= (props) =>{
 const {id, titulo, colorPrimario, colorSecundario }=props.datos
 const {colaboradores, eliminarColaborador, actualizarColor, like} = props
 
 const estiloFondo= {backgroundColor: hexToRgba(colorPrimario,0.4)}

 const estiloTitulo= {borderBottom: `4px solid ${colorPrimario}`}

 return <>
  {
   colaboradores.length > 0 &&
     <section className="equipo" style={estiloFondo}>
      <input
        type="color"
        className="input-color"
        value={colorPrimario}
        onChange={(event)=>{
          actualizarColor(event.target.value, id)
        }}
      />
     <h3 style={estiloTitulo}>{titulo}</h3>
     <div className="colaboradores">
      {
       colaboradores.map( (colaborador, index) => <Colaborador    datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}
       actualizarColor={actualizarColor}
       like= {like}
       />)
      }
     </div>
     </section>
  }
 </>
}

export default Equipo