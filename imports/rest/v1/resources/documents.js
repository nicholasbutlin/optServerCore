import { JsonRoutes } from 'meteor/simple:json-routes';
import { Documents } from '../../../api/documents/documents';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

const restInsertDocument = new ValidatedMethod({
  name: 'rest.documents.insert',
  validate: new SimpleSchema({
    title: { type: String },
    userId: { type: String },
  }).validator(),
  run(doc) {
    Documents.insert(doc);
  },
});

JsonRoutes.add('get', '/v1/documents/', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: Documents.find().fetch(),
  });
});

JsonRoutes.add('get', '/v1/documents/:id', function (req, res, next) {
  const id = req.params.id;
  JsonRoutes.sendResult(res, {
    data: Documents.findOne(id),
  });
});

JsonRoutes.add('post', '/v1/documents/', function (req, res, next) {
  const userId = req.userId;
  if (userId) {
    req.body.userId = userId;
    res.body = restInsertDocument.call(req.body);
  }
  JsonRoutes.sendResult(res, {
  });
});
