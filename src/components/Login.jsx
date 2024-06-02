/*import React from 'react'
import Form from 'react-bootstrap/Form';

export const Login = () => {
  return (
   
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>

        
  )
}*/
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const Login = () => {
  return (
    <Form>
      <h1> Login </h1>
      <br/>
      <Row  gap={2} className="col-md-3 mx-auto">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Row>
        <br/>
        <Row gap={2} className="col-md-3 mx-auto">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <br/>
     
          <Button variant="primary" type="submit" gap={2} className="col-md-2 mx-auto">
            Ingregar
          </Button>
     
    </Form>
  );
}


