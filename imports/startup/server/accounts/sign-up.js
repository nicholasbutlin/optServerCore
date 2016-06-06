import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function (options, user) {
  const u = user;
  u.roles = ['default'];
  if (options.profile) {
    u.profile = options.profile;
  }
  return u;
});
