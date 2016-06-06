import { Meteor } from 'meteor/meteor';
import { Events } from '../events';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('Events', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? Events.find({}) :
    Events.find({ userId: this.userId });
});
