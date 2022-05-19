import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const AddSectionModal = ({ show, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter section name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2"
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter section content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            if (name && content) {
              onAdd({
                name: name,
                content: content,
              });
              setName('');
              setContent('');
            }
            onClose();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSectionModal;
