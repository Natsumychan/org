import {useState} from "react"
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario';
import MiOrg from "./components/Miorg"
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";


function App() {
  const[mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo:"Programación",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie",
      puesto:"Instructora",
      fav:true
    },
    {
      id: uuidv4(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto:"Instructor",
      fav:false
    }
  ])
  const[equipos, setEquipos]= useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Ternario --> condicion ? seMuestra : alternativa

  const cambiarMostrar = () => actualizarMostrar(!mostrarFormulario)

  //Registrar colaborador
  const registrarColaborador= (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador= (id) =>{
    console.log("eliminar colaborador del id, ", id)
    const nuevosColaboradores= colaboradores.filter((colaborador) => colaborador.id !== id
    )
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipos
  const actualizarColor= (color, id)=>{
    console.log(`Actualizar; ${color} del equipo ${equipos.titulo}`)
    const equiposActualizados= equipos.map((equipo) =>{
      if(equipo.id===id){
        equipo.colorPrimario= color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo= (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    setEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  //oprimir like
  const like= (id)=>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></> } */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo, index) =>
           <Equipo 
           datos={equipo}
           key={index}
           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo) } 
           eliminarColaborador={eliminarColaborador}
           actualizarColor={actualizarColor}
           like={like}
           />
         )
      }
      <Footer/>
    </div>
  );
}

export default App;

