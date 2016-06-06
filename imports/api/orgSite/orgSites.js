import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const OrgSites = new Mongo.Collection('OrgSites');

if (Meteor.isServer) {
  OrgSites._ensureIndex({ clientId: 1 });
}

OrgSites.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

OrgSites.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

OrgSites.schema = new SimpleSchema({
  siteId: {
    type: '',
    label: '',
  },
  clientId: {
    type: '',
    label: '',
  },
  siteAddress: {
    type: '',
    label: '',
  },
});

OrgSites.attachSchema(OrgSites.schema);
