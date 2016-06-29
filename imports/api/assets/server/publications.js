import { Meteor } from 'meteor/meteor';
import { Assets } from '../assets';
import { Roles } from 'meteor/alanning:roles';

// TODO: Permissions: Publish only to allowed
Meteor.publish('assets', function docPublish() {
  const data = Roles.userIsInRole(this.userId, ['admin']) ? Assets.find({}) :
    Assets.find({ userId: this.userId });
  if (data) {
    return data;
  }
  return this.ready();
});
