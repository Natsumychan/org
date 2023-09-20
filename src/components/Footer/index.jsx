import "./Footer.css"

const Footer= () =>{
 const backgroundImg= {backgroundImage:"url(/img/footer.png)"}
 return <footer className="footer" style={backgroundImg}>
  <div className="redes">
   <a href="https://www,aluracursos.com/">
    <img src="/img/facebook.png" alt="facebook"/>
   </a>
   <a href="https://www,aluracursos.com/">
    <img src="/img/twitter.png" alt="twitter"/>
   </a>
   <a href="https://www,aluracursos.com/">
    <img src="/img/instagram.png" alt="instagram"/>
   </a>
  </div>
  <img src="/img/logo-footer.png" alt="org"/>
  <strong>Desarrollado por Diana Castaño</strong>
 </footer>
}

export default Footer