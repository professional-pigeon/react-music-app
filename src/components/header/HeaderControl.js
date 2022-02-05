import React from 'react'
import Instructions from './Instructions'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function HeaderControl() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Drum Machine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> console.log('modal to pop up here')}>Instructions</Nav.Link>
            <NavDropdown title="Other Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="">To-do-List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/kyle-kay-perez-911700214/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/professional-pigeon">Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderControl

//adjust nav and collapse settings later