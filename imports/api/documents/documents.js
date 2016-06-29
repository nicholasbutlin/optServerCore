import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Documents = new Mongo.Collection('documents');

// TODO: Function: Implement search as per: https://themeteorchef.com/snippets/simple-search/
if (Meteor.isServer) {
  Documents._ensureIndex({ title: 1 });
}

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  userId: {
    type: String,
    label: 'The user who owns this doc.',
  },
});

Documents.attachSchema(Documents.schema);
