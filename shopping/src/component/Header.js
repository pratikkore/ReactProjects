// import {  } from 'bootstrap';
import React from 'react'
import { Badge, CarouselItem, Container, FormControl, Nav, Navbar,Dropdown } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar bg="dark" variant="dark" styale={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl styale={{ width: 500 }} placeholder='search a product' className='m-auto' />
        </Navbar.Text>

        {/* NAvBar code */}

        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color='white' fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

      </Container>
    </Navbar>
  );
}

export default Header