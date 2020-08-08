import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

export default function InformationMessage() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="warning" className="card-shadow">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
            elit. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-info">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }