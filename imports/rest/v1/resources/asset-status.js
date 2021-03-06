import { JsonRoutes } from 'meteor/simple:json-routes';
import { Assets } from '../../../api/assets/assets';
import { insertAssetStatus } from '../../../api/assets/methods';

JsonRoutes.add('get', '/v1/asset-status/', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: 'no data',
  });
});

// Get the current status of an asset by id
JsonRoutes.add('get', '/v1/asset-status/:assetId', function (req, res, next) {
  const assetId = req.params.assetId;
  const asset = Assets.findOne({ assetId },
    { fields:
      { assetStatus: { $elemMatch: { current: true } },
      assetType: 1,
      assetRequestedPower: 1,
      assetChargePowerMax: 1,
      assetTotalEnergy: 1,
    },
  });
  const available = asset.assetStatus[0].available;
  const state = asset.assetStatus[0].state;
  const assetType = asset.assetType;
  const requestedPower = asset.assetRequestedPower;
  const powerMax = asset.assetChargePowerMax;
  const totalEnergy = asset.assetTotalEnergy;
  JsonRoutes.sendResult(res, {
    data: { asset: assetId, assetType, available, state, requestedPower, powerMax, totalEnergy },
  });
});

// check and if necessary update the current status of an asset
JsonRoutes.add('post', '/v1/asset-status/', function (req, res, next) {
  let data = {};
  if (req.userId) {
    req.body.assetStatus.userId = req.userId;
    insertAssetStatus.call(req.body, function (err, res) {
      if (err) {
        data = { err };
      } else {
        data = { res };
      }
    });
  }
  JsonRoutes.sendResult(res, {
    data,
  });
});
