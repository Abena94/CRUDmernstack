import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../images/MERN-logo.png'
import Image from 'react-bootstrap/Image';
export default function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image
             roundeCircle
              alt=""
              src={img}
              width="70"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MERN CRUD Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
