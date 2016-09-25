import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AdminNews from '../components/admin_news/admin_news.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('articles.admin', { light: true }).ready()) {
    const articles = Collections.Articles.find().fetch();
    onData(null, { articles });
  }
};

export const depsMapper = (context, actions) => ({
  goTo: actions.core.goTo,
  togglePublicState: actions.admin.togglePublicState,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AdminNews);
