import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import EmailVerifier from '../containers/accounts';

export class Index extends React.Component {
  render() {
    return <div>
      <EmailVerifier />
      <Jumbotron className="text-center">
        <h2>AppV</h2>
        <p>Welcome to AppV</p>
        <p style={ { fontSize: '16px', color: '#aaa' } }>if you don't see anything,
        it's because you need to get some permissions. </p>
        <a href="mailto:admin@viriyaenergy.com">admin@viriyaenergy.com</a>
      </Jumbotron>
    </div>;
  }
}
