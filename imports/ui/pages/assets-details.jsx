import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import AssetsList from '../containers/assets-list';
// import { AddAsset } from '../components/assets/add-asset';

export const Assets = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Asset Details</h4>
      {this.props.params.id}
      {/* <AddAsset />
      <AssetsList />*/}
    </Col>
  </Row>
);
