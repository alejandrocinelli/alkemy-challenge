import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link } from "react-router-dom"
import Buscador from "./Buscador";
import  "../css/MyNavBar.css"

function MyNavbar() {
  return (
    <Navbar expand="sm" variant="light" bg="light" >
      <Navbar.Brand aria-controls="basic"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="MyNavBar" ><Link className="MyNavBar" to="/">Inicio</Link></Nav.Link>
          <Nav.Link><Link className="MyNavBar" to="/listado">Listado</Link></Nav.Link>
          <Nav.Link><Link className="MyNavBar" to="/favoritos">Favoritos</Link></Nav.Link>
          <Buscador className=""/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;