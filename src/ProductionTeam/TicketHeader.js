import React from 'react';
import './TicketHeader.css';
import {Navbar,Container,Nav} from "react-bootstrap";

function TicketHeader() {

return (
<>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand >Online Movie Tickets Booking</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/ViewMovies">Movie</Nav.Link>
      <Nav.Link href="">Theaters</Nav.Link>
    </Nav>
    <Nav>
     <ul className="nav navbar-nav navbar-right">
     <Nav.Link href="/ProductionRegister"><span className="glyphicon glyphicon-user"> Sign Up</span></Nav.Link>
     <Nav.Link href="/ProductionLogin"><span className="glyphicon glyphicon-log-in"> Login</span></Nav.Link>
    </ul> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 
    </> 
    );
  }

export default TicketHeader;