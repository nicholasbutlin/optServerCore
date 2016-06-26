import { Assets } from './assets';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { moment } from 'meteor/momentjs:moment';

// UI Methods
export const insertAsset = new ValidatedMethod({
  name: 'assets.ui.insert',
  validate: new SimpleSchema({
    assetName: { type: String },
    assetId: { type: String },
    assetType: { type: String },
    location: { type: String },
  }).validator(),
  run(doc) {
    doc.userId = Meteor.userId();
    Assets.insert(doc);
  },
});

export const updateAsset = new ValidatedMethod({
  name: 'assets.ui.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.assetName': { type: String, optional: true },
    'update.assetId': { type: String, optional: true },
    'update.assetType': { type: String, optional: true },
    'update.location': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Assets.update(_id, { $set: update });
  },
});

export const removeAsset = new ValidatedMethod({
  name: 'assets.ui.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Assets.remove(_id);
  },
});

// API Methods

// Update the Status of an Asset
export const insertAssetStatus = new ValidatedMethod({
  name: 'assets.api.update-status',
  validate: new SimpleSchema({
    assetId: { type: String },
    'assetStatus.available': { type: Boolean },
    'assetStatus.state': { type: String },
    'assetStatus.userId': { type: String },
  }).validator(),
  run(doc) {
    let result = {};
    // find the assets status ->
    const asset = Assets.findOne({ assetId: doc.assetId },
            { fields: { assetStatus: { $elemMatch: { current: true } } } });

    const available = asset.assetStatus[0].available;
    const state = asset.assetStatus[0].state;

    if (doc.assetStatus.available !== available || doc.assetStatus.state !== state) {
      // if they are not the same
      const datetime = moment().format();
      // set current to false, put in end date
      Assets.update({
        assetId: doc.assetId,
        'assetStatus.current': true,
      }, {
        $set: {
          'assetStatus.$.current': false, // must set this
          'assetStatus.$.periodEnd': datetime, // and this, all else is copy
          'assetStatus.$.userId': doc.assetStatus.userId,
        },
      });
      // Open a new period, with new available, set periodStart to now
      Assets.update({ assetId: doc.assetId }, {
        $push: {
          assetStatus: {
            current: true,
            available: doc.assetStatus.available,
            state: doc.assetStatus.state,
            periodStart: datetime,
            userId: doc.assetStatus.userId,
          },
        },
      });
      result = { status: 'updated' };
    } else {
      result = { status: 'no update' };
    }
    return result;
  },
});


// Create an asset Event
export const updateAssetRequestedPower = new ValidatedMethod({
  name: 'assets.api.insert-event',
  validate: new SimpleSchema({
    assetId: { type: String },
    assetRequestedPower: { type: Number },
  }).validator(),
  run(doc) {
    let result = {};
    Assets.update({
      assetId: doc.assetId,
    }, {
      $set: {
        assetRequestedPower: doc.assetRequestedPower,
      },
    });
    result = doc.assetRequestedPower;
    return result;
  },
});
