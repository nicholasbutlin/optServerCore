import { JsonRoutes } from 'meteor/simple:json-routes';
import { Meteor } from 'meteor/meteor';

JsonRoutes.add('get', '*', function (req, res, next) {
  const error = new Meteor.Error('not-found', 'Not Found');
  error.statusCode = 404;
  throw error;
});

JsonRoutes.add('get', 'v1', function (req, res, next) {
  const error = new Meteor.Error('not-found', 'Not Found');
  error.statusCode = 404;
  throw error;
});

JsonRoutes.add('get', 'v1/*', function (req, res, next) {
  const error = new Meteor.Error('not-found', 'Not Found');
  error.statusCode = 404;
  throw error;
});
