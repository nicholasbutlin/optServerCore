import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { accountVerify } from '../../../api/accounts/methods';

let token;

export const handleVerifyEmail = (options) => {
  token = options.token;
  Accounts.verifyEmail(token, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Email verified! Thanks!', 'success');
    }
  });
};

export class EmailVerifier extends React.Component {
  handleResendVerifyEmail() {
    if (Meteor.user()) {
      accountVerify.call();
      const email = Meteor.user().emails[0].address;
      Bert.alert(`Verification sent to ${email}!`, 'success');
    }
  }

  renderVerifier(isValidated) {
    return isValidated ? null : <div>
      <p className="alert alert-warning">You need to verify your email address.
        <button onClick={ this.handleResendVerifyEmail } className="btn btn-small" >
          resend link
        </button>
      </p>
    </div>;
  }

  render() {
    return <div>
      { this.renderVerifier(this.props.isValidated) }
    </div>;
  }
}

EmailVerifier.propTypes = {
  isValidated: React.PropTypes.bool,
};
