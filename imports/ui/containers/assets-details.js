import { composeWithTracker } from 'react-komposer';
import { Assets } from '../../api/assets/assets';
import { AssetMetrics } from '../../api/assetMetrics/assetMetrics';
import { AssetDetail } from '../components/assets/assets-details';
import { Loading } from '../components/loading';
import { Meteor } from 'meteor/meteor';

const composer = (props, onData) => {
  //  TODO: why nn parse URL??
  const assetId = 'APC_UPS_Test';

  const subscription = (Meteor.subscribe('assets') && Meteor.subscribe('assetMetricsId', assetId));

  if (subscription.ready()) {
    const assetDetail = Assets.findOne({ assetId });
    const assetMetric = AssetMetrics.findOne({
      assetId,
    }, {
      sort: { measurementDatetime: -1 },
    });

    onData(null, { assetDetail, assetMetric });
  }
};

export default composeWithTracker(composer, Loading)(AssetDetail);
