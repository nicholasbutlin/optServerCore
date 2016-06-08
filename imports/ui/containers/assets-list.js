import { composeWithTracker } from 'react-komposer';
import { Assets } from '../../api/assets/assets.js';
import { AssetsList } from '../components/assets/assets-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('assets');
  if (subscription.ready()) {
    const assets = Assets.find().fetch();
    onData(null, { assets });
  }
};

export default composeWithTracker(composer, Loading)(AssetsList);
