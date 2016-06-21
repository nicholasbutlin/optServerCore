import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { EmailVerifier } from '../components/accounts/verify-email';
import { Loading } from '../components/loading';

const composer = (props, onData) => {
  if (Meteor.user()) {
    return onData(null, { isValidated: Meteor.user().emails[0].verified });
  }
  return onData(null, { isValidated: true });
};

export default composeWithTracker(composer, Loading)(EmailVerifier);
