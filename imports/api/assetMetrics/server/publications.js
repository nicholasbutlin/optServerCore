import { Meteor } from 'meteor/meteor';
import { AssetMetrics } from '../assetMetrics';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';

// TODO: Security in pub
Meteor.publish('assetMetrics', function docPublish() {
  return Roles.userIsInRole(this.userId, ['admin']) ? AssetMetrics.find({}) :
    AssetMetrics.find({});
});

Meteor.publish('assetMetricsId', function docPublish(assetId) {
  check(assetId, String);
  return Roles.userIsInRole(this.userId, ['admin']) ?
    AssetMetrics.find({
      assetId,
    }, {
      sort: { measurementDatetime: -1 },
      limit: 5,
    }) :
    AssetMetrics.find({
      assetId,
    }, {
      sort: { measurementDatetime: -1 },
      limit: 5,
    });
});
