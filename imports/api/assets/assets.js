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
    label: 'the unique human readable id of the Asset',
  },
  assetType: {
    type: String,
    label: 'a description of the type of asset',
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
    type: [Object],
    label: 'the status of this asset, forecast and historical',
    optional: true,
  },
});

Assets.attachSchema(Assets.schema);
