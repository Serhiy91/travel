import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Articles } from '/lib/collections';
import { _ } from 'meteor/underscore';

export default () => {
  Meteor.methods({
    'admin.upsertArticle'(article, articleId) {
      check(article, Object);
      check(articleId, Match.Maybe(Object));
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');
      const date = new Date();

      Articles.upsert(articleId, _.extend(article, {
        date,
        publicDate: article.isPublic ? date : null,
      }));
    },
    'admin.togglePublicState'(articleId, publicState) {
      check(articleId, String);
      check(publicState, Boolean);
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');

      Articles.update(articleId, { $set: {
        isPublic: publicState,
        publicDate: publicState ? new Date() : null,
      } });
    },
    'admin.deleteArticle'(articleId) {
      check(articleId, String);
      const user = Meteor.user();
      if (!user || !user.isAdmin) throw new Meteor.Error('403', 'Permission denied');

      Articles.remove(articleId);
    },
  });
};
