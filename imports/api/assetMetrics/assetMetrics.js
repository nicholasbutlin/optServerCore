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
    type: Object,
    label: 'state of charge, voltage, current, temperature, power etc...',
  },
  'metrics.stateOfCharge': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
  'metrics.voltage': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
  'metrics.current': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
  'metrics.temperature': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
  'metrics.power': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
  'metrics.energy': {
    type: Number,
    denyUpdate: true,
    optional: true,
  },
});

AssetMetrics.attachSchema(AssetMetrics.schema);
