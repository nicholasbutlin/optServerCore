import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import EmailVerifier from '../containers/accounts';

export class Index extends React.Component {
  render() {
    return <div>
      <EmailVerifier />
      <Jumbotron className="text-center">
        <h2>AppV</h2>
        <p>A starting point for Meteor applications.</p>
        <p style={ { fontSize: '16px', color: '#aaa' } }>Hello</p>
    </Jumbotron>;
  </div>;
  }
}
