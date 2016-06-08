import { Meteor } from 'meteor/meteor';
import { AssetStatuses } from '../assetStatuses';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('AssetStatuses', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? AssetStatuses.find({}) :
    AssetStatuses.find({ userId: this.userId });
});
