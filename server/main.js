import '/imports/startup/server';
import { Meteor } from 'meteor/meteor';

// TODO: Settings: Put this in settings file / bash
Meteor.startup(() => {
  process.env.MAIL_URL = '***REMOVED***';
});
