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
// TODO: Sites and Status not optional!!
Assets.schema = new SimpleSchema({
  assetName: {
    type: String,
    denyUpdate: true,
    label: 'the unique human readable id of the Asset',
  },
  assetType: {
    type: String,
    label: 'a description of the type of asset e.g. Meter, Battery etc..',
  },
  location: {
    type: String,
    label: 'a description of where on the site the asset is located',
  },
  siteId: {
    type: String,
    label: 'the site this asset is linked to',
    optional: true,
  },
  assetStatus: {
    type: [Array],
    label: 'the status of this asset, forecast and historical',
    optional: true,
    minimum: 0,
    items: {
      type: Object,
      required: ['available', 'updatedAt'],
      properties: {
        available: {
          type: Boolean,
          description: 'asset is available for use',
          default: false,
        },
        activityId: {
          type: String,
          description: 'any activity linked to this status',
          denyUpdate: true,
        },
        updatedAt: {
          type: String,
          description: 'date availability changed',
          denyUpdate: true,
        },
        periodStart: {
          type: String,
          description: 'date availability period started',
          denyUpdate: true,
        },
        periodEnd: {
          type: String,
          description: 'date availability period ends or ended',
          denyUpdate: true,
        },
        userId: {
          type: String,
          description: 'User who made the change',
          denyUpdate: true,
        },
      },
    },
  },
});

Assets.attachSchema(Assets.schema);
