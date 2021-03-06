import { composeWithTracker } from 'react-komposer';
import { Loading } from '../components/loading';
import { Meteor } from 'meteor/meteor';

import { APIKeys } from '../../api/apiKeys/apiKeys';
import { ApiKey } from '../components/apiKey';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('APIKey');
  if (subscription.ready()) {
    const apiKey = APIKeys.findOne();
    onData(null, { apiKey });
  }
};

export default composeWithTracker(composer, Loading)(ApiKey);
