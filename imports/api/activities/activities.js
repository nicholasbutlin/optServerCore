import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Activities = new Mongo.Collection('Activities');

if (Meteor.isServer) {
  Activities._ensureIndex({ blockId: 1 });
}

Activities.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Activities.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Activities.schema = new SimpleSchema({
  blockId: {
    type: String,
    label: 'the block of assets this activity applies to',
  },
  createdDate: {
    type: '',
    label: 'date this activity was created',
  },
  activityDatetime: {
    type: '',
    label: 'the start and end of the activity, predicted or actual',
  },
  activityType: {
    type: String,
    label: 'commission, test, etc..',
  },
  activityDescription: {
    type: String,
    label: 'details of who, what, where, when etc...',
  },
  userId: {
    type: String,
    label: 'activity creator',
  },
});

Activities.attachSchema(Activities.schema);
