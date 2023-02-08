import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link } from "react-router-dom"
import Badge from 'react-bootstrap/Badge';
import Buscador from "./Buscador";
import  "../css/MyNavBar.css"

function MyNavbar({favoritos}) {

  return (
    <Navbar expand="sm" variant="light" bg="light"  className="p-3" >
      <Navbar.Brand aria-controls="basic"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="MyNavBar" to="/">Inicio</Link>
          <Link className="MyNavBar" to="/listado">Listado</Link>
          <Link className="MyNavBar" to="/favoritos">Favoritos</Link>
          <Link className="MyNavBar" to="/favoritos" variant="light" style={{ color: '#AF7AC5 ' }}> {
            favoritos.favoritos.length > 0 ? ( <Badge pill className="MyNavBar">{favoritos.favoritos.length > 0 ? (<>{favoritos.favoritos.length}</> ) : (null) } </Badge>  ) : (null)
          }
            
          </Link>
          <Buscador className=""/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
