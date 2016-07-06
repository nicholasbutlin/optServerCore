import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AssetDetail from '../containers/assets-details';

export class AssetDetails extends React.Component {
  render() {
    return <Row>
      <Col xs={ 12 }>
        <h4 className="page-header">Asset Details</h4>
        <AssetDetail assetId={this.props.params.assetId}/>
      </Col>
    </Row>;
  }
}

AssetDetails.propTypes = {
  params: React.PropTypes.object,
};
