import { APIKeys } from './apiKeys';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Random } from 'meteor/random';
import { Meteor } from 'meteor/meteor';
// import { check, Match } from 'meteor/check';

export const initApiKey = new ValidatedMethod({
  name: 'initApi',
  validate: null,
  run() {
    if (Meteor.isServer) {
      const newKey = Random.hexString(32);
      const userId = Meteor.userId();
      try {
        const key = APIKeys.insert({
          owner: userId,
          key: newKey,
        });
        return key;
      } catch (exception) {
        return exception;
      }
    }
    return null;
  },
});


// TODO: Api Key: Regenerate API Key?
// export const regenerateApiKey = new ValidatedMethod({
//   name: 'regenApi',
//   validate(userId) {
//     return check(userId, Match.OneOf(Meteor.userId(), String));
//   },
//   run(userId) {
//     const newKey = Random.hexString(32);
//     try {
//       const key = APIKeys.insert({
//         owner: userId,
//         key: newKey,
//       });
//       return key;
//     } catch (exception) {
//       return exception;
//     }
//   },
// });
