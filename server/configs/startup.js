import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  const adminEmail = 'admin@admin.com';
  if (!Accounts.findUserByEmail(adminEmail)) {
    Accounts.createUser({
      email: adminEmail,
      password: 'admin',
      isAdmin: true,
    });
  }
});
