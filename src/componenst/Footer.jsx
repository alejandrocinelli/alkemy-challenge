import React from 'react';
import { Container, Row, Col, ListGroup , Button } from 'react-bootstrap';
import {Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import  "../css/footer.css"

const Footer = () => {
  return (
   
    <Card className="text-center mt-5">
   
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
     
  )}      

export default Footer;
