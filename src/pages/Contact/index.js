import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage(`${e.target.value}required`);
      }
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
          placeholder="First Last"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={message}
          onBlur={handleChange}
          rows={5}
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </Form.Group>
      <Button className="btn" data-testid="button" type="submit" variant="secondary">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
