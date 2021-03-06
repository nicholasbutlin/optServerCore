import React from 'react';
import { Row, Col, Alert, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleResetPassword } from '../../components/accounts/reset-password';

export class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({
      component: this,
      token: this.props.params.token,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Reset Password</h4>
        <Alert bsStyle="info">
          To reset your password, enter a new one below. You will be logged in
with your new password.
        </Alert>
        <form ref="resetPassword" className="reset-password" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <ControlLabel>New Password</ControlLabel>
            <FormControl
              type="password"
              ref="newPassword"
              name="newPassword"
              placeholder="New Password"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Repeat New Password</ControlLabel>
            <FormControl
              type="password"
              ref="repeatNewPassword"
              name="repeatNewPassword"
              placeholder="Repeat New Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Reset Password &amp; Login</Button>
        </form>
      </Col>
    </Row>;
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};
