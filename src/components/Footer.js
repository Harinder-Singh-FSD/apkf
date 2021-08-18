import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footer-address">
          <div className="footer-top-img"><img src="https://res.cloudinary.com/dvc56ayit/image/upload/v1629221759/logo-min_ribx0h.png" className="logo-header"/>
          <p>Akaal Purakh Ki Fauj</p></div>
          <div className="footer-address-bottom">
              <p>F 6/1 SECOND FLOOR</p>
              <p>MALVIYA NAGAR</p>
              <p>DELHI, INDIA</p>
              <p>Phone : +91 - 7271997199</p>
              <p>Email : Akaalpurakhkifauj.05@Gmail.Com</p>
          </div>
      </div>
      <Navbar expand="lg" className="footer">
        <Container >
          <Nav className="ml-auto">
           <p className="footer-copyright">Copyright © Akaal Purakh Ki Fauj</p>
          </Nav>
          <Nav className="mr-auto footer-social">
            <a className="footer-social" href="https://twitter.com/AkaalKi"><i class="fab fa-twitter"> TWITTER</i></a>
            <a className="footer-social">
            <i class="fab fa-facebook" href="https://www.facebook.com/akaalpurakhkifaujdelhi"> FACEBOOK</i>
            </a>
            <a className="footer-social" href="https://www.instagram.com/apkfdelhi">
            <i class="fab fa-instagram"> INSTAGRAM</i>
            </a>
            <a className="footer-social" href="https://www.youtube.com/channel/UCu307t8PlC1kwdAgO8ulDRA">
            <i class="fab fa-youtube"> YOUTUBE</i>
            </a>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
