import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import NewsForm from '../components/admin_news/news_form.jsx';

export const composer = ({ context }, onData) => {
  onData(null, { });
};

export const depsMapper = (context, actions) => ({
  createArticle: actions.admin.createArticle,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewsForm);
