import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,          // Scroll to the top of the page
      behavior: 'smooth' // Smooth scrolling effect
    });
  }
  return (
    <Navbar sticky="top" expand="lg" style={{backgroundColor:'rgb(255,177,15)'}}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          {/* Add the logo image */}
          <img
            src={logo}
            alt="GV Plots Logo"
            width="70"
            height="70"
            className="d-inline-block align-top me-2"
          />
          <h1 style={{color:'rgb(41,37,113)'}}>GV Plots and Homes</h1>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
