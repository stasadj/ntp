import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';

const Publication = ({ publication }) => {
  return (
    <Card as={Col} md="2" className="mb-2">
      <Card.Body>
        <Card.Title>{publication.title}</Card.Title>
        <Card.Img src="https://www.svgrepo.com/show/61280/newspaper.svg" style={{ width: '90%' }} />
      </Card.Body>
      <ListGroup className="list-group-flush" style={{ fontSize: '75%' }}>
        <ListGroupItem style={{ textAlign: 'left' }}>
          <b>ID: </b> {publication.sciPaperId}
        </ListGroupItem>
        <ListGroupItem style={{ textAlign: 'left' }}>
          <b>Author: </b> {publication.author}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Publication;
