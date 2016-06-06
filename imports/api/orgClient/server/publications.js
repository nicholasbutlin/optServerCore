import { Meteor } from 'meteor/meteor';
import { OrgClients } from '../orgClients';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('OrgClients', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? OrgClients.find({}) :
    OrgClients.find({ userId: this.userId });
});
