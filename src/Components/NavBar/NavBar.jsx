import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
function NavBar() {

    const [activeLink, setActiveLink] = useState('');
    const handleClick = (link) => {
      setActiveLink(link);
    };

  return (
    <Navbar variant="pills" expand="lg" className="nav-style">
    <Container>
      <Navbar.Brand as={Link} to="" className={`nav-item brand ${activeLink === 'brand' ? '' : ''}`}
        onClick={() => handleClick('brand')} >  START FRAMEWORK  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="About"  className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}
        onClick={() => handleClick('about')} > About </Nav.Link>

          <Nav.Link as={Link} to="portofolio" className={`nav-item ${activeLink === 'portofolio' ? 'active' : ''}`}
        onClick={() => handleClick('portofolio')}>portofolio </Nav.Link>
          <Nav.Link as={Link} to="Contact" className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}
        onClick={() => handleClick('contact')} >Contact</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar