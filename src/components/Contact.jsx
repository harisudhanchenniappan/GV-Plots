import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://gv-plots-1.onrender.com//api/contact', formData);
      setAlert({ show: true, type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setAlert({
        show: true,
        type: 'danger',
        message: error.response?.data?.error || 'Something went wrong',
      });
    }
  };

  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {alert.show && <Alert variant={alert.type}>{alert.message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
