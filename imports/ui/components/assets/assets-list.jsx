import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Asset } from './asset';

export const AssetsList = ({ assets }) => (
  assets.length > 0 ? <ListGroup className="asset-list">
    {assets.map((asset) => (
      <Asset key={ asset._id } asset={ asset } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No assets yet.</Alert>
);

AssetsList.propTypes = {
  assets: React.PropTypes.array,
};
