import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import SciPaperModal from '../../modals/SciPaperModal';

const SciPaper = ({ sciPaper, onPublish }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card as={Col} md="2" className="mb-2">
      <Card.Body>
        <Card.Title>{sciPaper.title}</Card.Title>
        <Card.Img
          src="https://www.svgrepo.com/show/230023/paper-leaf.svg"
          style={{ width: '90%' }}
        />
      </Card.Body>
      <Card.Body>
        <Button variant="primary" onClick={handleShow}>
          Show
        </Button>
      </Card.Body>
      <SciPaperModal show={show} onClose={handleClose} onPublish={onPublish} sciPaper={sciPaper} />
    </Card>
  );
};

export default SciPaper;
