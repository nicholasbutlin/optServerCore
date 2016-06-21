import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents';
import { DocumentsList } from '../components/documents/documents-list';
import { Loading } from '../components/loading';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
