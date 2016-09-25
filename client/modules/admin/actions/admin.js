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
};
