import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const accountVerify = new ValidatedMethod({
  name: 'accountVerify',
  validate: null,
  run() {
    const userId = Meteor.userId();
    if (userId && Meteor.isServer) {
      return Accounts.sendVerificationEmail(userId);
    }
    return null;
  },
});
