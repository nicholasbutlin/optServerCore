import { JsonRoutes } from 'meteor/simple:json-routes';
import { AssetMetrics } from '../../../api/assetMetrics/assetMetrics';

JsonRoutes.add('get', '/v1/asset-metrics/:assetId', function (req, res, next) {
  const assetId = req.params.assetId;

  JsonRoutes.sendResult(res, {
    data: AssetMetrics.find({ assetId }),
  });
});

JsonRoutes.add('post', '/v1/asset-metrics/', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: { input: 'OK' },
  });
});
