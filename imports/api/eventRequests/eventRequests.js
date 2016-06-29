import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const EventRequests = new Mongo.Collection('eventrequests');

if (Meteor.isServer) {
  EventRequests._ensureIndex({ 'eventInstructions.assetId': 1 });
}

EventRequests.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

EventRequests.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// TODO: Events: Scheduled events vs. instantaneous events
// TODO: Events: How does an event trequest trigger an event?

EventRequests.schema = new SimpleSchema({
  eventRequestCreated: {
    type: Date,
    label: 'when was this event created',
    optional: true,
  },
  eventType: {
    type: String,
    label: 'what type of event this is',
  },
  eventStart: {
    type: String,
    label: 'when is the start of this event',
  },
  eventEnd: {
    type: Date,
    label: 'when is the end of this event, if known',
    optional: true,
  },
  eventInstructions: {
    type: [Object],
    minCount: 0,
    label: 'the details of the instructions if not at block level',
  },
  'eventInstructions.$.assetId': {
    type: String,
    label: 'the unique, agreed id of the asset',
  },
  'eventInstructions.$.chargeRate': {
    type: Number,
    label: 'the rate set for charging, watts, negative is discharge',
  },
  'eventInstructions.$.calculatedAt': {
    type: String,
    label: 'datetime the instruction was calculated',
    optional: true,
  },
  blockId: {
    type: String,
    label: 'which block is this event acting on',
    optional: true,
  },
});

EventRequests.attachSchema(EventRequests.schema, { removeEmptyStrings: false });
