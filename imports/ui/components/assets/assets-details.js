import React from 'react';
// import { Link } from 'react-router';
import { Row, Col, ListGroupItem, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

// const handleRemoveAsset = (assetId, event) => {
//   event.preventDefault();
//   // TODO: Style: this should be replaced with a styled solution
//   // disable the eslint `no-alert`
//   // eslint-disable-next-line no-alert
//   if (confirm('Are you sure? This is permanent.')) {
//     removeAsset.call({
//       _id: assetId,
//     }, (error) => {
//       if (error) {
//         Bert.alert(error.reason, 'danger');
//       } else {
//         Bert.alert('Asset removed!', 'success');
//       }
//     });
//   }
// };

export const AssetDetail = ({ assetDetail, assetMetric }) => (
    <Row>
      <Col xs={ 4 } md={ 2 }>
        { assetDetail.assetName }
      </Col>
      <Col xs={ 4 } md={ 2 }>
        { assetDetail.assetId }
      </Col>
      <Col xs={ 4 } md={ 2 }>
        { assetDetail.location }
      </Col>
      <Col xs={ 4 } md={ 2 }>
        { assetMetric.measurementDatetime }
      </Col>

      {/*
        <Col xs={ 12 } md={ 2 } mdOffset={2}>
        <Button
        bsStyle="danger"
        className="btn-block"
        onClick={ handleRemoveAsset.bind(this, asset._id) }>
        Remove
        </Button>
        </Col>
      */}

      {/*
        <Col xs={ 12 } md={ 2 }>
        <Button
        sStyle="warning"
        className="btn-block"
        onClick={ handleViewDetails.bind(this, asset._id) }>
        Edit
        </Button>
        </Col>
      */}

    </Row>
);

AssetDetail.propTypes = {
  assetDetail: React.PropTypes.object,
  assetMetric: React.PropTypes.object,
};
