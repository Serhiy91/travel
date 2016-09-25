import { Meteor } from 'meteor/meteor';
import { Articles } from '/lib/collections';
import { check } from 'meteor/check';

export default () => {
  Meteor.publish('articles.admin', function (light) {
    check(light, Boolean);
    const fields = light ? { text: 0 } : {};
    return Articles.find({}, { fields });
  });
};
