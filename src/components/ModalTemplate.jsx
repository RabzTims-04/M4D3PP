import { Modal, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import AddComment from './AddComment'

const ModalTemplate = (props)=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Comments
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props['bookName']}</Modal.Title>
          </Modal.Header>
       
          <Row className="justify-content-center text-center mt-3">
         <Col xs={12} md={6}>
         <AddComment bookId={props['bookId']}/>
         </Col>
            </Row>
        
         
         {/*  <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
             <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> 
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }

  export default ModalTemplate
  