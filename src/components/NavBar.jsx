import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from "react-router"

function NavBar () {
  
  return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">DecorArg</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/category/iluminacion">Iluminación</Nav.Link>
                    <Nav.Link as={Link} to="/category/espejos">Espejos</Nav.Link>
                    <Nav.Link as={Link} to="/category/cuadros">Cuadros</Nav.Link>
                    <Nav.Link as={Link} to="/category/floreros">Floreros</Nav.Link>
                </Nav>
                <CartWidget/>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    )
}

export default NavBar
       