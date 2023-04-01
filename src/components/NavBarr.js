import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';  // used to show the data from store which is clicked from products.js file.  
//Use the useSelector hook to select the data you want to display from the Redux store. This hook takes a selector function as its argument, which is used to extract the desired state from the store.

function NavBarr () {
    let items = useSelector((state)=> state.cart) // we have to use useSelector to show the updated value or state and updated value is presented in the state.cart and then show it in {item.length} in link below.
    // For getting the data we use useSelector hook and then subscribe it 
    
    return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cartt">Cartt</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link>Cart Items: {items.length}</Nav.Link>     
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarr;