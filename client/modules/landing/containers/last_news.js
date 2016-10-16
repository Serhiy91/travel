import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import LastNews from '../components/last_news.jsx';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LastNews);
