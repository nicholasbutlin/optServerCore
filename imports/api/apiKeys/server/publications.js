import { Meteor } from 'meteor/meteor';
import { APIKeys } from '../apiKeys';
// import { Roles } from 'meteor/alanning:roles';

Meteor.publish('APIKey', function () {
  const user = this.userId;
  const data = APIKeys.find({ owner: user }, { fields: { key: 1 } });
  if (data) {
    return data;
  }
  return this.ready();
});
