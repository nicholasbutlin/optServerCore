import React from 'react';
import { handleVerifyEmail } from '../../components/accounts/verify-email';

export class VerifyEmail extends React.Component {
  componentDidMount() {
    handleVerifyEmail({
      component: this,
      token: this.props.params.token,
    });
  }
  render() {
    return null;
  }
}

VerifyEmail.propTypes = {
  params: React.PropTypes.object,
};
