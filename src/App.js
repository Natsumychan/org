import {useState} from "react"
import './App.css';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario';
import MiOrg from "./components/Miorg"

function App() {
  const[mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : alternativa

  const cambiarMostrar = () => actualizarMostrar(!mostrarFormulario)

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></> } */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;

