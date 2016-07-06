import React from 'react';
import { Row, Col, ListGroupItem, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeAsset } from '../../../api/assets/methods';
import { browserHistory } from 'react-router';
import { moment } from 'meteor/momentjs:moment';

const handleRemoveAsset = (assetId, event) => {
  event.preventDefault();
  // TODO: Style: this should be replaced with a styled solution
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeAsset.call({
      _id: assetId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        browserHistory.push('/assets');
        Bert.alert('Asset removed!', 'success');
      }
    });
  }
};

export const AssetDetail = ({ assetDetail, assetMetric }) => (
    <div>
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
          { assetDetail.assetType }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.siteId }
        </Col>
        <Col xs={ 12 } md={ 2 } mdOffset={2}>
          <Button
            bsStyle="danger"
            className="btn-block"
            onClick={ handleRemoveAsset.bind(this, assetDetail._id) }>
            Delete Asset
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetRequestedPower }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetStatus[0].state }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetStatus[0].available }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetChargePowerMax }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetTotalEnergy }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetDischargePowerMax }
        </Col>

      </Row>

      <Row>
        <Col xs={ 6 } md={ 4 }>
          { assetMetric ?
            moment(assetMetric.measurementDatetime).format('MMMM Do YYYY, h:mm:ss a') :
          'No Data' }
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } md={ 4 }>
          { assetMetric ?
            moment(assetMetric.measurementDatetime).format('MMMM Do YYYY, h:mm:ss a') :
          'No Data' }
        </Col>
      </Row>
    </div>
);

AssetDetail.propTypes = {
  assetDetail: React.PropTypes.object,
  assetMetric: React.PropTypes.object,
};
