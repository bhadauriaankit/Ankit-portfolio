"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

export default function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#">Ankit Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
            <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
            <Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
            <Link to="achievements" smooth={true} duration={500} className="nav-link">Achievements</Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
