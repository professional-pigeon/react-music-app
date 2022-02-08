import React from 'react';
import Instructions from './Instructions';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useState } from 'react';
import './Header.css';

function HeaderControl() {
  const [popUp, setPopUp] = useState(false)

  function closePopUp() {
    setPopUp(false)
  }
  return (
    <div>
    <Navbar className="navStyle">
      <Container>
        <Navbar.Brand>Drum Machine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> setPopUp(true)}>Instructions</Nav.Link>
            <NavDropdown title="Other Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://dragdrop-todolist.herokuapp.com/">Trello Style To-do-List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/kyle-kay-perez-911700214/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/professional-pigeon">Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    { popUp && <Instructions close={closePopUp} /> }
    </div>
  )
}

export default HeaderControl

//adjust nav and collapse settings later