// TODO: Add user details
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ApiKey from '../containers/apiKey.js';

export const AccountDetails = () => (
  <Row>
    <Col xs={ 12 } md={ 12 }>
      <h4 className="page-header">Account Details</h4>
      <ApiKey />
    </Col>
  </Row>
);
