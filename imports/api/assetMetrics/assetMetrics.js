import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const AssetMetrics = new Mongo.Collection('assetmetrics');

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
    decimal: true,
  },
  'metrics.voltage': {
    type: Number,
    denyUpdate: true,
    optional: true,
    decimal: true,
  },
  'metrics.current': {
    type: Number,
    denyUpdate: true,
    optional: true,
    decimal: true,
  },
  'metrics.temperature': {
    type: Number,
    denyUpdate: true,
    optional: true,
    decimal: true,
  },
  'metrics.power': {
    type: Number,
    denyUpdate: true,
    optional: true,
    decimal: true,
  },
  'metrics.energy': {
    type: Number,
    denyUpdate: true,
    label: 'any energy readings in kwh',
    optional: true,
    decimal: true,
  },
  'metrics.gridPower': {
    type: Number,
    label: 'power drawn from the grid, vs. e.g. battery',
    optional: true,
    decimal: true,
  },
  'metrics.availableEnergy': {
    type: Number,
    denyUpdate: true,
    label: 'the energy remaining for use',
    optional: true,
    decimal: true,
  },
});

AssetMetrics.attachSchema(AssetMetrics.schema);
