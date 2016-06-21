import { JsonRoutes, RestMiddleware } from 'meteor/simple:json-routes';
import { APIKeys } from '../../../api/apiKeys/apiKeys';

import 'meteor/simple:rest-json-error-handler';

JsonRoutes.setResponseHeaders({
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
});

JsonRoutes.ErrorMiddleware.use(RestMiddleware.handleErrorAsJson);

const getUserIdFromAuthToken = (token) => {
  console.log(token);
  if (token) {
    const apiUser = APIKeys.findOne({ key: token });
    console.log(apiUser);
    if (apiUser) {
      return apiUser.owner;
    }
    return null;
  }
  return null;
};

JsonRoutes.Middleware.use(function (req, res, next) {
  console.log('OK Mid');
  console.log(req.headers.apikey);
  const userId = getUserIdFromAuthToken(req.headers.apikey);
  console.log(userId);
  if (userId) {
    req.userId = userId;
  }
  next();
});
