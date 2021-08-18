import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Email from "../components/Email";
const ContactUs = () => {
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>CONTACT</h2>
        </div>
        <Row className="contact">
          <Col lg={3} className="contact-items">
            <Email />
          </Col>
          <Col lg={3} className="contact-items">
            <h3 style={{backgroundColor:"orange"}}>Address</h3>
            <div className="address">
            <p>F 6/1 SECOND FLOOR</p>
            <p>MALVIYA NAGAR</p><p>DELHI, INDIA</p>
            <p><span className="address-title">Phone</span> : +91 - 7271997199</p>
            <p><span className="address-title">Email</span> : Akaalpurakhkifauj.05@Gmail.Com</p>
            </div>
          </Col>
          <Col lg={3}>
              <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.648126965922!2d77.20097492208816!3d28.534849070541714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21e7d306d03%3A0x94b8ccb323d7648!2sMalviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1629265115553!5m2!1sen!2sin" width="300" height="300" allowfullscreen="" loading="lazy"></iframe>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
