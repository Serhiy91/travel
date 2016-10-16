import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import LandingPage from '../components/landing_page.jsx';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  goTo: actions.core.goTo,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LandingPage);
