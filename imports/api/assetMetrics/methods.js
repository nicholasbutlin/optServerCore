import { AssetMetrics } from './assetMetrics';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const insertAssetMetric = new ValidatedMethod({
  name: 'assetMetric.insert',
  validate: AssetMetrics.schema.validator(),
  run(doc) {
    AssetMetrics.insert(doc);
  },
});
