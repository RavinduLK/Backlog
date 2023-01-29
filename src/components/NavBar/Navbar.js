import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navStyle.css'

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    
        <Navbar  bg="#231651"  className=" mt-0 mb-3 bg-[#231651]">
          <Container fluid>
            <Navbar.Brand href="#" className=''  >
            <img
              alt=""
              src={require('../images/Tp.png')}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2 mr-4 my-0 "
            />
              Tracko</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Offcanvas  
              placement="end"
            >
              <Offcanvas.Header closeButton>
              
                <Offcanvas.Title >
                  Tracko
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ps-5">
                  <Nav.Link onClick={() => navigate('/ProjectList')} href="#action1" className='mx-2 text-white transition duration-700 hover:scale-125 ease-in-out' >
                    Project
                  </Nav.Link>
                  <Nav.Link href="#action1" onClick={() => navigate('/ClientList')} className='mx-2  text-white transition duration-700 hover:scale-125 ease-in-out'>
                    Clients
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={() => navigate('/ClientList')} className='mx-2 text-white transition duration-700 hover:scale-125 ease-in-out'>
                    Users
                  </Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success " className=' text-white  outline-slate-100 '>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
 
    
  );
}
export default NavBar;

