import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black nav-custom">
      <Container>
        <Navbar.Brand href="#home" style={styles.logo}>DEVZKUND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={styles.menuItem}>Portfolio</Nav.Link>
            <Nav.Link href="#link" style={styles.menuItem}>About</Nav.Link>
            <Nav.Link href="#link" style={styles.menuItem}>Service</Nav.Link>
            <Nav.Link href="#link" style={styles.menuItem}>Projects</Nav.Link>
            <Nav.Link href="#link" style={styles.menuItem}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Styles here

const styles = {
  logo: {
    fontFamily: "blanka",
    color: "white",
  },
  menuItem: {
    color: 'white', 
    marginLeft: 20,
  },
};
