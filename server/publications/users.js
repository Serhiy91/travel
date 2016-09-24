import { Meteor } from 'meteor/meteor';

export default () => {
  Meteor.publish('user', function () {
    return Meteor.users.find(
      { _id: this.userId },
      { fields: { isAdmin: 1 } }
    );
  });
};
