import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629221759/logo-min_ribx0h.png" className="logo-header"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto header-menu">
            <Nav.Link href="/" className="nav-links">HOME</Nav.Link>
            <Nav.Link href="about_us" className="nav-links">ABOUT US</Nav.Link>
            <NavDropdown title="PROJECTS" id="collasible-nav-dropdown" className="nav-links">
              <NavDropdown.Item href="/projects/ongoing">ONGOING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/completed">
                COMPLETED
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/never_ending">NEVER ENDING</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/contact_us" className="nav-links">CONTACT</Nav.Link>
            <Nav.Link href="/join_us" className="nav-links">
            BE OUR VOLUNTEER
            </Nav.Link>
            <Nav.Link href="/donation" className="nav-links" id="donate-button">
              DONATE NOW
            </Nav.Link>
          </Nav>
          <div className="header-social">
            <Nav.Link href="https://twitter.com/AkaalKi"><i class="fab fa-twitter"></i></Nav.Link>
            <Nav.Link  href="https://www.facebook.com/akaalpurakhkifaujdelhi">
            <i class="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/apkfdelhi/">
            <i class="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCu307t8PlC1kwdAgO8ulDRA">
            <i class="fab fa-youtube"></i>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
