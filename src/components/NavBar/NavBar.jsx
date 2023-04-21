import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar  = () => {
    return (
        <header>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Confitería React</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Productos</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
   
    </header>
    );
}