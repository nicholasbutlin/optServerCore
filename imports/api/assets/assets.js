import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Assets = new Mongo.Collection('assets');

if (Meteor.isServer) {
  Assets._ensureIndex({ assetName: 1, assetStatus: 1 });
}

Assets.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Assets.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
// TODO: Asset: relatiopnship with site and how to use . manage
Assets.schema = new SimpleSchema({
  assetName: {
    type: String,
    label: 'the unique human readable id of the Asset',
  },
  assetId: {
    type: String,
    denyUpdate: true,
    label: 'the unique machine id of the Asset',
  },
  assetType: {
    type: String,
    label: 'a description of the type of asset e.g. Meter, Battery etc..',
  },
  location: {
    type: String,
    label: 'a description of where on the site the asset is located',
  },
  assetChargePowerMax: {
    type: Number,
    label: 'Maximum rated power input in w',
    defaultValue: 0,
    decimal: true,
  },
  assetDischargePowerMax: {
    type: Number,
    label: 'Maximum rated power output in w',
    defaultValue: 0,
    decimal: true,
  },
  assetRequestedPower: {
    type: Number,
    label: '0: Neutral, +1...n: Force Charge, -1..n: Force Discharge',
    defaultValue: 0,
    decimal: true,
  },
  assetTotalEnergy: {
    type: Number,
    label: 'Maximum energy stored by the asset in wh',
    defaultValue: 0,
    decimal: true,
  },
  siteId: {
    type: String,
    label: 'the site this asset is linked to',
    optional: true,
  },
  userId: {
    type: String,
    label: 'the site this asset is linked to',
    optional: true,
  },
  assetIntegrations: {
    type: [Object],
    label: 'the integration modules for this asset',
    optional: true,
  },
  'assetIntegrations.$.name': {
    type: String,
    label: 'the integration module name',
    optional: true,
  },
  'assetIntegrations.$.type': {
    type: String,
    label: 'the integration module type, e.g. metering, control etc...',
    optional: true,
  },
  'assetIntegrations.$.commisioned': {
    type: Date,
    label: 'the date this integration was commisioned',
    optional: true,
  },
  'assetIntegrations.$.altId': {
    type: String,
    label: 'the alternative id of this asset for this integration',
    optional: true,
  },
  assetStatus: {
    type: Array,
    label: 'the status of this asset, forecast and historical',
    optional: true,
    minCount: 0,
  },
  'assetStatus.$': {
    type: Object,
    label: 'the status of this asset, forecast and historical',
    optional: true,
  },
  'assetStatus.$.current': {
    type: Boolean,
    label: 'true if this is the current record',
  },
  'assetStatus.$.available': {
    type: Boolean,
    label: 'true if asset is available for use',
  },
  'assetStatus.$.state': {
    type: String,
    label: 'the state e.g. maintenance, cool-down, ready, in-event',
  },
  'assetStatus.$.periodStart': {
    type: Date,
    label: 'date availability period started',
    optional: true,
  },
  'assetStatus.$.periodEnd': {
    type: Date,
    label: 'date availability period ends or ended',
    optional: true,
  },
  'assetStatus.$.userId': {
    type: String,
    label: 'User who made the change',
  },
  'assetStatus.$.activityId': {
    type: String,
    label: 'any activity linked to this status. e.g. maintenance record',
    optional: true,
  },
});

Assets.attachSchema(Assets.schema, { removeEmptyStrings: false });
