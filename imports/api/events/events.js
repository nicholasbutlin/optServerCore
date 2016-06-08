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
    denyUpdate: true,
  },
  eventStart: {
    type: String,
    label: 'when is the start of this event',
  },
  eventEnd: {
    type: String,
    label: 'when is the start of this event',
  },
  eventActual: {
    type: Boolean,
    label: 'is this a forecast or actual historical, actual is true',
  },
  eventInstruction: {
    type: [Array],
    minimum: 0,
    optional: true,
    properties: {
      assetId: {
        type: String,
        denyUpdate: true,
        description: 'the unique, agreed name of the asset',
      },
      chargeRate: {
        type: Number,
        optional: true,
        description: 'the rate set for charging, watts, negative is discharge',
      },
      calculatedAt: {
        type: String,
        description: 'datetime the instruction was calculated',
        denyUpdate: true,
      },
    },
  },
});

Events.attachSchema(Events.schema);

// event_instruction: {
//   type: Array,
//   minimum: 0,
//   properties: {
//     asset_id: {
//       type: String,
//       denyUpdate: true,
//       description: "the unique, agreed name of the asset"
//     },
//     charge_rate: {
//       type: Number,
//       optional: true,
//       description: "the rate set for charging, watts"
//     },
//     discharge_rate:{
//       type: Number,
//       optional: true,
//       description: "the rate set for discharging, watts"
//     },
//     calculated_at: {
//       type: String,
//       description: "datetime the instruction was calculated",
//       denyUpdate: true
//     },
//   }
