import React from 'react';
import { Row, Col, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateAsset, removeAsset } from '../../../api/assets/methods';
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

const handleUpdateAsset = (assetId, event) => {
  const newVal = event.target.value.trim();
  const item = event.target.id;
  if (newVal !== '' && event.keyCode === 13) {
    const update = {};
    update[item] = newVal;
    updateAsset.call({
      _id: assetId,
      update,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Asset updated!', 'success');
      }
    });
  }
};

export const AssetDetail = ({ assetDetail, assetMetric }) => (
    <div>
      <Row>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetId">
            <ControlLabel>Asset ID</ControlLabel>
            <FormControl
              type="text"
              readOnly
              standalone
              id='assetId'
              defaultValue={ assetDetail.assetId }
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } md={ 4 }>
          <FormGroup controlId="metric">
            <ControlLabel>Latest Metric</ControlLabel>
            <FormControl
              type="text"
              readOnly
              standalone
              defaultValue={ assetMetric ?
                moment(assetMetric.measurementDatetime).format('MMMM Do YYYY, h:mm:ss a') :
              'No Data' }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetRequestedPower">
            <ControlLabel>Event State</ControlLabel>
            <FormControl
              type="text"
              readOnly
              standalone
              id='assetRequestedPower'
              defaultValue={
                assetDetail.assetRequestedPower == 0 ?
                'Neutral' :
                assetDetail.assetRequestedPower == 1 ?
                'Charge' : 'Discharge'
              }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetName">
            <ControlLabel>Asset Name</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='assetName'
              defaultValue={ assetDetail.assetName }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="location">
            <ControlLabel>Asset Location</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='location'
              defaultValue={ assetDetail.location }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetType">
            <ControlLabel>Asset Type</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='assetType'
              defaultValue={ assetDetail.assetType }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="siteId">
            <ControlLabel>Related Site Name</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='siteId'
              defaultValue={ assetDetail.siteId }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetChargePowerMax">
            <ControlLabel>Rated Input Power W</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='assetChargePowerMax'
              defaultValue={ assetDetail.assetChargePowerMax }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetDischargePowerMax">
            <ControlLabel>Rated Output Power W</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='assetDischargePowerMax'
              defaultValue= { assetDetail.assetDischargePowerMax }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } md={ 2 }>
          <FormGroup controlId="assetTotalEnergy">
            <ControlLabel>Max Energy Stored Wh</ControlLabel>
            <FormControl
              type="text"
              standalone
              id='assetTotalEnergy'
              defaultValue={ assetDetail.assetTotalEnergy }
              onKeyUp={ handleUpdateAsset.bind(this, assetDetail._id) }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetStatus[0].state }
        </Col>
        <Col xs={ 4 } md={ 2 }>
          { assetDetail.assetStatus[0].available }
        </Col>
      </Row>

      <Row>
        {/* Should be Admin only?*/}
        <Col xs={ 12 } md={ 2 }>
          <FormGroup>
            <ControlLabel>Delete Asset?</ControlLabel>
            <Button
              bsStyle="danger"
              className="btn-block"
              onClick={ handleRemoveAsset.bind(this, assetDetail._id) }>
              Delete Asset
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </div>
);

AssetDetail.propTypes = {
  assetDetail: React.PropTypes.object,
  assetMetric: React.PropTypes.object,
};
