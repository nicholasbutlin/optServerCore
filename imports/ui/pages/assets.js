import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AssetsList from '../containers/assets-list.js';
import { AddAsset } from '../components/assets/add-asset.js';

export const Assets = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Assets</h4>
      <AddAsset />
      <AssetsList />
    </Col>
  </Row>
);
