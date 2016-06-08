import { Meteor } from 'meteor/meteor';
import { OrgContacts } from '../orgContacts';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('OrgContacts', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? OrgContacts.find({}) :
    OrgContacts.find({ userId: this.userId });
});
