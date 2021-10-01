import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">MoviesApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favourites">Favs</Nav.Link>
        </Nav>
        <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
        </Container>
      </Navbar>
    )
}

export default NavBar
