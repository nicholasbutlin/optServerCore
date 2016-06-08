import { APIKeys } from './apiKeys';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Random } from 'meteor/random';
import { Match } from 'meteor/check';

// TODO: API Key management on remotes?

export const initApiKey = new ValidatedMethod({
  name: 'initApi',
  validate: check(userId, Match.OneOf(Meteor.userId(), String)),
  run(userId) {
    const newKey = Random.hexString(32);
    try {
      const key = APIKeys.insert({
        owner: userId,
        key: newKey,
      });
      return key;
    } catch (exception) {
      return exception;
    }
  },
});


  // },
  // regenerateApiKey: function( userId ){
  //   check( userId, Meteor.userId() );
  //
  //   var newKey = Random.hexString( 32 );
  //
  //   try {
  //     var keyId = APIKeys.update( { "owner": userId }, {
  //       $set: {
  //         "key": newKey
  //       }
  //     });
  //     return keyId;
  //   } catch(exception) {
  //     return exception;
  //   }
