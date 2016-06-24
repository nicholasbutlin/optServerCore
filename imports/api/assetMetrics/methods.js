import { AssetMetrics } from './assetMetrics';
import { Assets } from '../assets/assets';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const insertAssetMetric = new ValidatedMethod({
  name: 'assetMetric.insert',
  validate: AssetMetrics.schema.validator(),
  run(doc) {
    let res = '';
    const asset = Assets.findOne({ assetId: doc.assetId });
    if (asset) {
      res = AssetMetrics.insert(doc);
    } else {
      res = 'asset not found';
    }
    return res;
  },
});
