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
export const insertAssetStatus = new ValidatedMethod({
  name: 'assets.api.update-status',
  validate: new SimpleSchema({
    assetId: { type: String },
    'assetStatus.available': { type: Boolean },
    'assetStatus.userId': { type: String },
  }).validator(),
  run(doc) {
    let result = {};
    // find the assets status ->
    const asset = Assets.findOne({ assetId: doc.assetId },
            { fields: { assetStatus: { $elemMatch: { current: true } } } });

    const status = asset.assetStatus[0].available;

    if (doc.assetStatus.available !== status) {
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
            available: doc.assetStatus.available,
            current: true,
            periodStart: datetime,
            userId: doc.assetStatus.userId,
            reason: doc.assetStatus.reason,
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
