import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const JoinUs = () => {
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await emailjs.sendForm(
        "service_l2ho9tg",
        "template_2pmdjo5",
        e.target,
        "user_YsOVzfLrIhHWElLyXkRU0"
      );
      setShow(true);
      e.target.reset();
    } catch (error) {
      alert("Oops... " + JSON.stringify(error.message));
    }
  };

  return (
    <>
      {show ? (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Mail Sent Successfully</Alert.Heading>
          <p>Your Details has been sent to the Team.</p>
        </Alert>
      ) : null}
      <Form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Full Name" name="name" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Full Address" name="address" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Number" name="number" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email Address" name="email" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="number" placeholder="Age" name="age" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="text" placeholder="Occpation" name="occupation" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="test" placeholder="Other Skills" name="skills" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Select  name="typeofjoining">
            <option>In what way do you want to help APKF?</option>
            <option value="non-field work">Non-Field Work</option>
            <option value="home based projects">Home Based Projects</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Message"
          />
        </Form.Group>
        <br />

        <Button type="submit" style={{ width: "100%" }}>
          Send
        </Button>
        <br />
      </Form>
    </>
  );
};

export default JoinUs;
