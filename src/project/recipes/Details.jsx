import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardDetails from './CardDetails';
import '../css/home.css'

function Details(r) {
  const [smShow, setSmShow] = useState(false);
  r = r.r
  return (
    <>
      <div style={{ "textAlign": "center" }}>
        <Button style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }} onClick={() => setSmShow(true)} className="me-2">
          לפרטים נוספים
        </Button>
        <Modal
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {r.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='co'>
            <CardDetails recipe={r}></CardDetails>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Details;
