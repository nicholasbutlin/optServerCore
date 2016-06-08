import { Meteor } from 'meteor/meteor';
import { Assets } from '../assets';
import { Roles } from 'meteor/alanning:roles';

// TODO: Publish only to allowed
Meteor.publish('assets', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin', 'default']) ? Assets.find({}) :
    Assets.find({ userId: this.userId });
});
