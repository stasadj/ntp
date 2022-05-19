import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';

import Publication from './Publication';
import LibraryService from '../../services/LibraryService';

const PublicationList = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    LibraryService.getAll()
      .then((response) => {
        setPublications(response.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {publications.length === 0 ? (
        <h1>Empty!</h1>
      ) : (
        <Row>
          {publications.map((publication, index) => (
            <Publication key={index} publication={publication} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default PublicationList;
