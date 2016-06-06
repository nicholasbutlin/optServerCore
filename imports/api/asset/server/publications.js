import { Meteor } from 'meteor/meteor';
import { Assets } from '../assets';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('Assets', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? Assets.find({}) :
    Assets.find({ userId: this.userId });
});
