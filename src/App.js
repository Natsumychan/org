import {useState} from "react"
import './App.css';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario';
import MiOrg from "./components/Miorg"
import Equipo from "./components/Equipo";

function App() {
  const[mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, setColaboradores] = useState([])
  //Ternario --> condicion ? seMuestra : alternativa

  const cambiarMostrar = () => actualizarMostrar(!mostrarFormulario)

  //Registrar colaborador
  const registrarColaborador= (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos
  const equipos= [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></> } */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />
      }
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo, index) =>
           <Equipo 
           equipo={equipo.titulo} 
           colorPrimario={equipo.colorPrimario} colorSecundario={equipo.colorSecundario} 
           key={index}
           colaboradores={colaboradores} 
           />
         )
      }
    </div>
  );
}

export default App;

