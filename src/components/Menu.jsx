/*import React from 'react'

export const Menu = () => {
  return (
    <div>Menu</div>
  )
}*/
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Menu = () => {
  
    return (
      <>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Brand text</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
 
}