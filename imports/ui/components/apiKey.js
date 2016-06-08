import React from 'react';
// import {  } from '../../../api/apiKeys/methods';

import { InputGroup, Glyphicon, Row, Col, FormGroup,
  ControlLabel, FormControl } from 'react-bootstrap';

export const ApiKey = ({ apiKey }) => (
    <Row>
      <Col xs={ 12 } md={ 12 }>
        <p>
          The following is your API Key. <strong>To generate a new key,
          click the "refresh" icon</strong>.
        </p>
        <ControlLabel className="sr-only" for="apiKey">Your API Key</ControlLabel>
        <FormGroup>
          <InputGroup>
            <FormControl
              disabled
              id="apiKey"
              type="text"
              defaultValue={ apiKey.key }
            />
            <InputGroup.Addon >
              <Glyphicon glyph="refresh" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Col>
    </Row>
);


ApiKey.propTypes = {
  apiKey: React.PropTypes.object,
};

// Template.apiKey.events({
//   'click .regenerate-api-key': function( ){
//      var userId              = Meteor.userId(),
//          confirmRegeneration = confirm( "Are you sure?
//                  This will invalidate your current key!" );
//
//      if ( confirmRegeneration ) {
//        Meteor.call( "regenerateApiKey", userId, function( error, response ) {
//          if ( error ) {
//            Bert.alert( error.reason, "danger", 'growl-top-right' );
//          } else {
//            Bert.alert( "All done! You have a new API key.", "success", 'growl-top-right' );
//          }
//        });
//      }
//   }
// });
