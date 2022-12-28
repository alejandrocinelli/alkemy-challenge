import {Link } from "react-router-dom"
import Buscador from "./Buscador" 

const Header = () => {
  return (
    <>
<header className="">
        <nav className="navbar-light "> 
        <div className="d-flex">
          <div>
            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
                <li className="nav-item"><Link to="/listado" className="nav-link">Listado</Link></li>
                <li className="nav-item"><Link className="nav-link">Contacto </Link></li>
                
            </ul>
          </div>
          
            <Buscador className=""/>
        </div>
            
         </nav>
    </header>




     </>
    
   
  )
}
export default Header