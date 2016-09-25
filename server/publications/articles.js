import { Meteor } from 'meteor/meteor';
import { Articles } from '/lib/collections';
import { check, Match } from 'meteor/check';

export default () => {
  Meteor.publish('articles.admin', function ({ light, articleId }) {
    check(light, Match.Maybe(Boolean));
    check(articleId, Match.Maybe(String));
    const user = Meteor.users.findOne(this.userId);
    if (!user || !user.isAdmin) return null;

    const fields = light ? { text: 0 } : {};
    const filter = articleId ? { _id: articleId } : {};
    return Articles.find(filter, { fields });
  });
};
