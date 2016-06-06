import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Assets = new Mongo.Collection('Assets');

if (Meteor.isServer) {
  Assets._ensureIndex({ assetId: 1, assetStatus: 1 });
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

Assets.schema = new SimpleSchema({
  assetId: {
    type: String,
    label: 'the unique id of the Asset',
  },
  siteId: {
    type: String,
    label: 'the site this asset is linked to',
  },
  assetStatus: {
    type: '',
    label: 'the status of this asset, forecast and historical',
  },
  assetType: {
    type: String,
    label: 'a description of the type of asset',
  },
  location: {
    type: String,
    label: 'a description of where on the site the asset is located',
  },
});

Assets.attachSchema(Assets.schema);
