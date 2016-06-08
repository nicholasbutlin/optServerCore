import $ from 'jquery';
import 'jquery-validation';
import React from 'react';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertAsset } from '../../../api/assets/methods.js';
import { getInputValue } from './../get-input-value';

let component;

const getAssetData = () => ({
  assetName: getInputValue(component.refs.assetName),
  assetType: getInputValue(component.refs.assetType),
  location: getInputValue(component.refs.location),
});

const createAsset = () => {
  const assetData = getAssetData();
  insertAsset.call(
    assetData
  , (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      $('.addasset').trigger('reset');
      Bert.alert('Asset added!', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.addasset).validate({
    rules: {
      assetName: {
        required: true,
      },
      assetType: {
        required: true,
      },
      location: {
        required: true,
      },
    },
    messages: {
      assetName: {
        required: 'Identifiable name?',
      },
      assetType: {
        required: 'Type of Asset?',
      },
      location: {
        required: 'Where is this asset located?',
      },
    },
    submitHandler() { createAsset(); },
  });
};

const handleCreateAsset = (options) => {
  component = options.component;
  validate();
};


export class AddAsset extends React.Component {
  componentDidMount() {
    handleCreateAsset({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } md={ 12 } >
        <form ref="addasset" className="addasset" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 4 } md={ 2 }>
              <FormGroup>
                <FormControl
                  type="text"
                  ref="assetName"
                  name="assetName"
                  placeholder="Asset Name"
                />
              </FormGroup>
            </Col>
            <Col xs={ 4 } md={ 2 } >
              <FormGroup>
                <FormControl
                  type="text"
                  ref="assetType"
                  name="assetType"
                  placeholder="Asset Type"
                />
              </FormGroup>
            </Col>
            <Col xs={ 4 } md={ 2 }>
              <FormGroup>
                <FormControl
                  type="text"
                  ref="location"
                  name="location"
                  placeholder="Asset Location"
                />
              </FormGroup>
            </Col>
            <Col xs={ 12 } md={ 2 } mdOffset={2} >
              <Button type="submit" bsStyle="success" className="">
                Insert
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>;
  }

}
