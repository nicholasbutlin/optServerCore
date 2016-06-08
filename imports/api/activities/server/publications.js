import { Meteor } from 'meteor/meteor';
import { Activities } from '../activities';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('Activities', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? Activities.find({}) :
    Activities.find({ userId: this.userId });
});
