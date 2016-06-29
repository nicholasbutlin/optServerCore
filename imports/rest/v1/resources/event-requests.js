import { JsonRoutes } from 'meteor/simple:json-routes';
import { Assets } from '../../../api/assets/assets';
import { insertEventRequest } from '../../../api/eventRequests/methods';
import { updateAssetRequestedPower } from '../../../api/assets/methods';


// check if in an event
JsonRoutes.add('get', '/v1/event/:assetId', function (req, res, next) {
  const assetId = req.params.assetId;
  let data = {};
  if (req.userId) {
    data = Assets.findOne({
      assetId,
    }, {
      fields: { _id: 0, assetRequestedPower: 1, assetDischargePowerMax: 1, assetChargePowerMax: 1 },
    });
  }
  JsonRoutes.sendResult(res, {
    data,
  });
});

// insert event with instructions
JsonRoutes.add('post', '/v1/event/:assetId', function (req, res, next) {
  let data = {};
  if (req.userId) {
    updateAssetRequestedPower.call(req.body, function (err, res) {
      if (err) {
        data = { err };
      } else {
        data = { res };
      }
    });
  }
  JsonRoutes.sendResult(res, {
    data: data,
  });
});

// TODO: Events: Better event requests, ending and opening...
// insert request for Event
JsonRoutes.add('post', '/v1/event-requests/', function (req, res, next) {
  let data = {};
  if (req.userId) {
    insertEventRequest.call(req.body, function (err, res) {
      if (err) {
        data = { err };
      } else {
        data = { res };
      }
    });
  }
  JsonRoutes.sendResult(res, {
    data: data,
  });
});
