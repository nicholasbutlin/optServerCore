import { JsonRoutes } from 'meteor/simple:json-routes';
import { AssetMetrics } from '../../../api/assetMetrics/assetMetrics';
import { insertAssetMetric } from '../../../api/assetMetrics/methods';

JsonRoutes.add('get', '/v1/asset-metrics/', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: 'no data',
  });
});

JsonRoutes.add('get', '/v1/asset-metrics/:assetId', function (req, res, next) {
  const assetId = req.params.assetId;
  JsonRoutes.sendResult(res, {
    data: AssetMetrics.find({ assetId }, { limit: 10 }).fetch(),
  });
});

JsonRoutes.add('post', '/v1/asset-metrics/:assetId', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: 'not accessible',
  });
});

JsonRoutes.add('post', '/v1/asset-metrics/', function (req, res, next) {
  let data = {};
  if (req.userId) {
    insertAssetMetric.call(req.body, function (error) {
      if (error) {
        data = { error };
      }
    });
  }
  JsonRoutes.sendResult(res, {
    data: data,
  });
});
