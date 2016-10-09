import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from '/lib/collections.js';

export default () => {
  Meteor.methods({
    'contacts.update'(contacts) {
      check(contacts, Object);
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');

      Contacts.upsert({}, contacts);
    },
  });
};
