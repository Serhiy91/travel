import { Meteor } from 'meteor/meteor';
import { Contacts } from '/lib/collections';

export default () => {
  Meteor.publish('contacts', function () {
    return Contacts.find();
  });
};
