import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black pt-3 sticky-top" style={styles.customNavPro}>
      <Container>
        <Navbar.Brand href="#portfolio" style={styles.logo}>DEVZKUND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ marginRight: '8em' }}>
            <Nav.Link href="#portfolio" style={styles.menuItem}>Portfolio</Nav.Link>
            <Nav.Link href="#about" style={styles.menuItem}>About</Nav.Link>
            <Nav.Link href="#service" style={styles.menuItem}>Service</Nav.Link>
            <Nav.Link href="#projects" style={styles.menuItem}>Projects</Nav.Link>
            <Nav.Link href="#contactUs" style={styles.menuItem}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Styles here

const styles = {
  customNavPro: {
    boxShadow: '0em 0.05em 0.5em 0.1em rgba(255, 189, 57, 0.09)'
  },
  logo: {
    fontFamily: "blanka",
    color: "white",
  },
  menuItem: {
    color: 'white',
    marginLeft: 25,
    letterSpacing: '0.05em',
  },
};
