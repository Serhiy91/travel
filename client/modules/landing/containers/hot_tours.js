import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import HotTours from '../components/hot_tours.jsx';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HotTours);
