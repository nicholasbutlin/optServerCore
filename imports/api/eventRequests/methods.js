import { EventRequests } from './eventRequests';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { moment } from 'meteor/momentjs:moment';

export const insertEventRequest = new ValidatedMethod({
  name: 'eventRequests.api.insert',
  validate: EventRequests.schema.validator(),
  run(doc) {
    let result = {};
    doc.eventRequestCreated = moment().format();
    result = EventRequests.insert(doc);
    return result;
  },
});
