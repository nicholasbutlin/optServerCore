import { Meteor } from 'meteor/meteor';
import { APIKeys } from '../apiKeys';
// import { Roles } from 'meteor/alanning:roles';

Meteor.publish('APIKey', function apiPublish() {
  const userId = this.userId;
  // const data = APIKeys.find({ owner: userId }, { fields: { key: 1 } });
  const data = APIKeys.find({ owner: userId });
  if (data) {
    return data;
  }
  return this.ready();
});
