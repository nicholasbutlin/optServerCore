import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const AssetStatuses = new Mongo.Collection('AssetStatuses');

if (Meteor.isServer) {
  AssetStatuses._ensureIndex({ assetId: 1 });
}

AssetStatuses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

AssetStatuses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

AssetStatuses.schema = new SimpleSchema({
  assetId: {
    type: '',
    label: '',
  },
  updatedAt: {
    type: '',
    label: 'when this record was updated',
  },
  dateTimeRange: {
    type: '',
    label: 'from when to when, or indefinite?',
  },
  userId: {
    type: '',
    label: '',
  },
  assetStatus: {
    type: '',
    label: 'In, out, shake it all about',
  },
});

AssetStatuses.attachSchema(AssetStatuses.schema);
