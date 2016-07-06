import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AssetDetail from '../containers/assets-details';

export const AssetsDetails = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Asset Details</h4>
      <AssetDetail />
    </Col>
  </Row>
);
