import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UploadFileModalPopUpY(props) {
  const [show, setShow] = useState(false);
  const fileName = props.fileName;
  const sopB64x = props.sopB64;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submitFile = () => {
  } 
  
  return (
    <>
      <div className='pt-2'>
        <Button style={{backgroundColor: "#3C7479"}} onClick={handleShow}>
          Upload
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure to upload this file: <br/> {fileName}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitFile}>
            Additional button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}