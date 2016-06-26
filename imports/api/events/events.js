import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { moment } from 'meteor/momentjs:moment';
import { Random } from 'meteor/random';

export const Events = new Mongo.Collection('Events');

if (Meteor.isServer) {
  Events._ensureIndex({ eventId: 1 });
}

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Events.schema = new SimpleSchema({
  eventType: {
    type: String,
    label: 'what type of event this is',
  },
  eventCreated: {
    type: Date,
    label: 'when was this event created',
    autovalue: () => moment().format(),
    denyUpdate: true,
  },
  eventStart: {
    type: String,
    label: 'when is the start of this event',
  },
  eventEnd: {
    type: String,
    label: 'when is the end of this event, if known',
    optional: true,
  },
  eventInstruction: {
    type: [Object],
    minCount: 0,
    label: 'the details of the instruction if not at block level',
    optional: true,
  },
  'eventInstruction.$.assetId': {
    type: String,
    denyUpdate: true,
    label: 'the unique, agreed id of the asset',
  },
  'eventInstruction.$.chargeRate': {
    type: Number,
    optional: true,
    label: 'the rate set for charging, watts, negative is discharge',
  },
  'eventInstruction.$.calculatedAt': {
    type: String,
    label: 'datetime the instruction was calculated',
  },
  blockId: {
    type: String,
    label: 'which block is this event acting on',
    optional: true,
  },
});

Events.attachSchema(Events.schema, { removeEmptyStrings: false });
