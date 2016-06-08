import { Meteor } from 'meteor/meteor';
import { AssetMetrics } from '../assetMetrics';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('AssetMetrics', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? AssetMetrics.find({}) :
    AssetMetrics.find({ userId: this.userId });
});
