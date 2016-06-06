import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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
  eventId: {
    type: String,
    label: 'unique id of the event record',
  },
  blockId: {
    type: String,
    label: 'which block is this event acting on',
  },
  eventType: {
    type: String,
    label: 'what type of event this is',
  },
  eventCreated: {
    type: '',
    label: 'when was this event created',
  },
  eventDatetime: {
    type: Object,
    label: 'when is the start and end of this event',
  },
  eventActual: {
    type: Boolean,
    label: 'is this a forecast or historical',
  },
});

Events.attachSchema(Events.schema);
