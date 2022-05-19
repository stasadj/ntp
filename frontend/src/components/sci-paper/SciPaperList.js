import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';

import SciPaper from './SciPaper';
import SciPaperService from '../../services/SciPaperService';

import { toastSuccessMessage } from '../../toast/toastMessages';

const SciPaperList = () => {
  const [sciPapers, setSciPapers] = useState([]);

  useEffect(() => {
    SciPaperService.getAll(localStorage.getItem('user'))
      .then((response) => {
        setSciPapers(response.data);
      })
      .catch((err) => {});
  }, []);

  const handlePublish = (sciPaper) => {
    SciPaperService.publish(sciPaper.id)
      .then((response) => {
        toastSuccessMessage('Paper successfully published!');
        sciPaper.published = true;
      })
      .catch((err) => {});
  };

  return (
    <div>
      {sciPapers.length === 0 ? (
        <h1>Empty!</h1>
      ) : (
        <Row>
          {sciPapers.map((sciPaper, index) => (
            <SciPaper key={index} sciPaper={sciPaper} onPublish={handlePublish} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default SciPaperList;
