import { Meteor } from 'meteor/meteor';
import { EventRequests } from '../eventRequests';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('Events', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? EventRequests.find({}) :
    EventRequests.find({ userId: this.userId });
});
