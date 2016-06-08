import { Meteor } from 'meteor/meteor';
import { OrgSites } from '../orgSites';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('orgSites', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? orgSites.find({}) :
    orgSites.find({ userId: this.userId });
});
