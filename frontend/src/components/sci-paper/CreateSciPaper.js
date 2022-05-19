import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

import { toastErrorMessage, toastSuccessMessage } from '../../toast/toastMessages';

import SciPaperService from '../../services/SciPaperService';

import AddSectionModal from '../../modals/AddSectionModal';

const CreateSciPaper = () => {
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCreate = () => {
    if (title && sections.length > 0) {
      const user = localStorage.getItem('user');
      SciPaperService.create({ title: title, author: user, sections: sections, published: false })
        .then((response) => {
          if (response.data) {
            toastSuccessMessage('Scientific Paper successfully created!');
            setTitle('');
            setSections([]);
          } else {
            toastErrorMessage('Scientific Paper creation failed.');
          }
        })
        .catch((err) => toastErrorMessage('Scientific Paper creation failed.'));
    } else {
      toastErrorMessage('Scientific Paper must have a title and at least one section.');
    }
  };
  const handleAdd = (section) => {
    setSections([...sections, section]);
  };

  return (
    <Container>
      <Form.Group as={Col} md="4" className="mt-4 mb-2 offset-4">
        <Form.Label style={{ fontWeight: 300, fontSize: 30 }}>Title:</Form.Label>
        <Form.Control
          id="title"
          name="title"
          type="text"
          placeholder="My First Scientific Paper"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      {sections.map((section, index) => (
        <Card
          key={index}
          as={Col}
          md="4"
          className="mt-4 mb-2 offset-4"
          style={{ textAlign: 'justify' }}
        >
          <Card.Header>{section.name}</Card.Header>
          <Card.Body>
            <Card.Text>{section.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      <Button variant="primary" type="submit" style={{ marginLeft: 190 }} onClick={handleShow}>
        Add Section
      </Button>
      <Button variant="success" type="submit" className="mx-1" onClick={handleCreate}>
        Create
      </Button>
      <AddSectionModal show={show} onClose={handleClose} onAdd={handleAdd} />
    </Container>
  );
};

export default CreateSciPaper;
