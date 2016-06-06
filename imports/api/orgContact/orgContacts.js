import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const OrgContacts = new Mongo.Collection('OrgContacts');

if (Meteor.isServer) {
  OrgContacts._ensureIndex({ clientId: 1 });
}

OrgContacts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

OrgContacts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

OrgContacts.schema = new SimpleSchema({
  contactId: {
    type: '',
    label: 'id of the contact',
  },
  clientId: {
    type: '',
    label: 'contact related to which client',
  },
  userId: {
    type: '',
    label: 'which user is this contact related to',
  },
  siteIds: {
    type: '',
    label: 'which sites is  this contact related to',
  },
  contactDetails: {
    type: 'Object',
    label: 'first name, surname, job title, telephone, email',
  },
  contactType: {
    type: '',
    label: 'billing, technical, etc...',
  },
  contactStatus: {
    type: '',
    label: 'live or otherwise',
  },
});

OrgContacts.attachSchema(OrgContacts.schema);
