export default {
  upsertArticle({ Meteor, FlowRouter }, article, articleId) {
    Meteor.call('admin.upsertArticle', article, articleId, (err) => {
      if (err) {
        console.error(err.reason);
      } else {
        FlowRouter.go('admin.news');
      }
    });
  },
  togglePublicState({ Meteor }, articleId, publicState) {
    Meteor.call('admin.togglePublicState', articleId, publicState, (err) => {
      if (err) console.error(err.reason);
    });
  },
  deleteArticle({ Meteor }, articleId) {
    Meteor.call('admin.deleteArticle', articleId, (err) => {
      if (err) console.error(err.reason);
    });
  },
};
