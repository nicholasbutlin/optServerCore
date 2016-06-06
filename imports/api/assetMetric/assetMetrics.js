import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const AssetMetrics = new Mongo.Collection('AssetMetrics');

if (Meteor.isServer) {
  AssetMetrics._ensureIndex({ assetId: 1 });
}

AssetMetrics.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

AssetMetrics.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

AssetMetrics.schema = new SimpleSchema({
  assetId: {
    type: '',
    label: '',
  },
  measurementDatetime: {
    type: '',
    label: '',
  },
  metrics: {
    type: 'Object',
    label: 'state of charge, voltage, current, temperature',
  },
});

AssetMetrics.attachSchema(AssetMetrics.schema);
