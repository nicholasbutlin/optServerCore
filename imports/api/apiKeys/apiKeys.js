import { Mongo } from 'meteor/mongo';

export const APIKeys = new Mongo.Collection('apiKeys');

APIKeys.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
APIKeys.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
