import {Link } from "react-router-dom"
import Buscador from "./Buscador" 

const Header = () => {
  return (
    <header className="">
        <nav className=""> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listado">Listado</Link></li>
                <li>Contacto</li>
            </ul>
            <Buscador />
         </nav>
    </header>
  )
}
export default Header