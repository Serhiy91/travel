import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Articles } from '/lib/collections';
import { _ } from 'meteor/underscore';

export default () => {
  Meteor.methods({
    'admin.createArticle'(article) {
      check(article, Object);
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');
      const date = new Date();

      Articles.insert(_.extend(article, {
        date,
        publicDate: article.public ? date : null,
      }));
    },
    'admin.togglePublicState'(articleId, publicState) {
      check(articleId, String);
      check(publicState, Boolean);
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');

      Articles.update(articleId, { $set: { isPublic: publicState } });
    },
  });
};
