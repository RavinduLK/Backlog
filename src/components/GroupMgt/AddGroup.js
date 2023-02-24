import React, { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
    

const AddGroup = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      return (
        <>
          <Button 
          variant="primary" 
          className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out my-0" 
          onClick={handleShow}>
            Add Group
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <MDBRow>
                    <MDBCol>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control
                                type="Name"
                                placeholder="team"
                                autoFocus
                            />
                            </Form.Group>
                    </MDBCol>
                    
                </MDBRow>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Add Member</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="JhonDee999"
                    autoFocus
                  />
                  </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Add access</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="create backlog"
                    autoFocus
                  />
                
                
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
   
  )
}

export default AddGroup