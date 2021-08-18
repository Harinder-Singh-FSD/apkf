import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JoinUs from "../components/JoinUs";

const JoinUsPage = () => {
  return (
    <div>
      <Container>
        <div className="about-us-header">
          <h2>VOLUNTEER SIGN-UP</h2>
        </div>
        <Row className="contact">
          <Col lg={5} className="contact-items" style={{backgroundColor:"orange",color:"white",fontSize:"larger"}}>
            <p>As a popular saying </p>
            <p>
              “Volunteers do not necessarily have the time; they just have the
              heart.”
            </p>
            <p>
              We rely on the volunteers to carry out the work that we do, so if
              you believe in what we do and can offer your time then please do
              sign up. It is also a great way to meet likeminded people and be
              inspired to keep on the path!
            </p>
            <p>
              Any effort that you make in this direction will be valued and
              graciously accepted by our team. We rely upon your willingness to
              contribute to our goals so that we can drive towards our aims and
              include more needy people in our reach.
            </p>
          </Col>
          <Col lg={4}>
            <JoinUs />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinUsPage;
