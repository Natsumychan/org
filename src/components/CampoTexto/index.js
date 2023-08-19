import "./CampoTexto.css"

const CampoTexto = () =>{
 return <div className="campo-texto">
  <label for="nombre">Nombre</label>
  <input type="text" placeholder="ingresar nombre" id="nombre" />
 </div>
}

export default CampoTexto