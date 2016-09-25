export default {
  createArticle({ Meteor, FlowRouter }, article) {
    Meteor.call('admin.createArticle', article, (err) => {
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
};
