import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import NewsForm from '../components/admin_news/news_form.jsx';

export const composer = ({ context }, onData) => {
  const { FlowRouter, Meteor, Collections } = context();
  const articleId = FlowRouter.getParam('articleId');
  if (articleId && Meteor.subscribe('articles.admin', { articleId }).ready()) {
    const article = Collections.Articles.findOne(articleId);
    return onData(null, { article });
  }
  return onData(null, { });
};

export const depsMapper = (context, actions) => ({
  createArticle: actions.admin.createArticle,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewsForm);
