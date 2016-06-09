import { JsonRoutes } from 'simple:json-routes';
import { RestMiddleware } from 'simple:rest-json-error-handler';
import { Meteor } from 'meteor/meteor';

// Enable cross origin requests for all endpoints
JsonRoutes.setResponseHeaders({
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
});

JsonRoutes.ErrorMiddleware.use(
  RestMiddleware.handleErrorAsJson
);

JsonRoutes.add('get', 'handle-error', function () {
  const error = new Meteor.Error('not-found', 'Not Found');
  error.statusCode = 404;
  throw error;
});
