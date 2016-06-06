import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('documents', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? Documents.find({}) :
    Documents.find({ userId: this.userId });
});
