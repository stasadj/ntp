import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SciPaperModal = ({ show, onClose, sciPaper, onPublish }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{sciPaper.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {sciPaper.sections.map((section, index) => (
          <Card key={index} as={Col} md="12" className="mb-2" style={{ textAlign: 'justify' }}>
            <Card.Header>{section.name}</Card.Header>
            <Card.Body>
              <Card.Text>{section.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          disabled={sciPaper.published}
          onClick={() => {
            onPublish(sciPaper);
            onClose();
          }}
        >
          Publish
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SciPaperModal;
