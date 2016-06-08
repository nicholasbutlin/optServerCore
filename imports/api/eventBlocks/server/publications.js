import { Meteor } from 'meteor/meteor';
import { EventBlocks } from '../eventBlocks';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('EventBlocks', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? EventBlocks.find({}) :
    EventBlocks.find({ userId: this.userId });
});
