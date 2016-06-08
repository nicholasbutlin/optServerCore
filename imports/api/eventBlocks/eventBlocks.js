import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const EventBlocks = new Mongo.Collection('eventBlocks');

if (Meteor.isServer) {
  EventBlocks._ensureIndex({ assets: 1 });
}

EventBlocks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
EventBlocks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

EventBlocks.schema = new SimpleSchema({
  createdAt: {
    type: String,
    description: 'datetime the block was created',
    denyUpdate: true,
  },
  blockId: {
    type: String,
    denyUpdate: true,
    description: 'the block id',
  },
  liveBlock: {
    type: Boolean,
    default: false,
    description: 'whether this block is currently live',
  },
  assets: {
    type: Array,
    abel: 'the assets in this event block',
    minCount: 0,
  },
  'assets.$.assetId': {
    type: String,
  },
});

EventBlocks.attachSchema(EventBlocks.schema);
