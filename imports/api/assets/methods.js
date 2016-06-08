import { Assets } from './assets';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const insertAsset = new ValidatedMethod({
  name: 'assets.insert',
  validate: new SimpleSchema({
    assetName: { type: String },
    assetType: { type: String },
    location: { type: String },
  }).validator(),
  run(document) {
    document.userId = Meteor.userId();
    Assets.insert(document);
  },
});

export const updateAsset = new ValidatedMethod({
  name: 'assets.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.assetName': { type: String, optional: true },
    'update.assetType': { type: String, optional: true },
    'update.location': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Assets.update(_id, { $set: update });
  },
});

export const removeAsset = new ValidatedMethod({
  name: 'assets.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Assets.remove(_id);
  },
});
