import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { APIKeys } from '../../api/apiKeys/apiKeys';
import { Random } from 'meteor/random';

const users = [
  {
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Admin', last: 'User' },
    },
    roles: ['admin', 'default'],
  },
  {
    email: 'nickbutlin@viriyaenergy.com',
    password: 'Amnes1aViriya',
    profile: {
      name: { first: 'Nick', last: 'Butlin' },
    },
    roles: ['admin', 'default'],
  },
];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
    const newKey = Random.hexString(32);
    APIKeys.insert({
      owner: userId,
      key: newKey,
    });
  }
});
