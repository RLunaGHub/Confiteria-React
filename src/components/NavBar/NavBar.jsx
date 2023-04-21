import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/logo.jpg"

const stylesLogo = {
    img: {
        height: 35
    }
   
}

export const NavBar  = () => {
    return (
        <header>
    <Navbar bg="dark" variant="dark">
    <Container>
       <img src={logo} alt="Imagen de logo forma de torta" style={stylesLogo.img} />
        <Navbar.Brand href="#home">Confitería React</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Productos</Nav.Link>
        <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
   
    </header>
    );
}