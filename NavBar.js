import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'



const NavBar = () => {
    return (
       
            <Navbar bg="primary" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/movies">Movies</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
            
    )
}

export default NavBar