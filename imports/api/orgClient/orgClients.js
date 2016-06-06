import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const OrgClients = new Mongo.Collection('OrgClients');

if (Meteor.isServer) {
  OrgClients._ensureIndex({ clientId: 1 });
}

OrgClients.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

OrgClients.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

OrgClients.schema = new SimpleSchema({
  clientId: {
    type: '',
    label: '',
  },
  clientName: {
    type: '',
    label: '',
  },
});

OrgClients.attachSchema(OrgClients.schema);
