import React, { useState } from "react";
import { Form, Button,Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const Email = () => {
    const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await emailjs.sendForm(
        "service_l2ho9tg",
        "template_ox6ftfn",
        e.target,
        "user_YsOVzfLrIhHWElLyXkRU0"
      );
      setShow(true)
      e.target.reset()
    } catch (error) {
      alert("Oops... " + JSON.stringify(error.message));
    }
  };

  return (
      <>
   {show?
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Mail Sent Successfully</Alert.Heading>
            <p>
              Your Details has been sent to the Team.
            </p>
          </Alert>:null
      }
    <Form onSubmit={handleSubmit} style={{alignItems:"center"}}>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Full Name"
          name="name"
        />
      </Form.Group><br/>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
        />
      </Form.Group><br/>
      <Form.Group className="mb-1">
        <Form.Control
          type="number"
          placeholder="Number"
          name="number"
        />
      </Form.Group><br/>
      <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          placeholder="Message"
        />
      </Form.Group><br/>
      <Button type="submit" style={{width:"100%"}}>Send</Button><br/>
    </Form>
    </>
  );
};

export default Email;
