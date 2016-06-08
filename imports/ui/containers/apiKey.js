import { composeWithTracker } from 'react-komposer';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

import { APIKeys } from '../../api/apiKeys/apiKeys';
import { ApiKey } from '../components/apiKey.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('APIKey');
  if (subscription.ready()) {
    const apiKey = APIKeys.findOne();
    onData(null, { apiKey });
  }
};

export default composeWithTracker(composer, Loading)(ApiKey);
