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
    type: [Array],
    label: 'state of charge, voltage, current, temperature, power etc...',
    minimum: 0,
    required: [],
    properties: {
      stateOfCharge: {
        type: Number,
        denyUpdate: true,
      },
      voltage: {
        type: Number,
        denyUpdate: true,
      },
      current: {
        type: Number,
        denyUpdate: true,
      },
      temperature: {
        type: Number,
        denyUpdate: true,
      },
    },
  },
});

AssetMetrics.attachSchema(AssetMetrics.schema);
