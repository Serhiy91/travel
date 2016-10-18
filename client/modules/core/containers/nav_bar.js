import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import NavBar from '../components/partial/nav_bar.jsx';

export const composer = ({ context }, onData) => {
  const { FlowRouter } = context();
  const currentRoute = FlowRouter.getRouteName();
  onData(null, { currentRoute });
};

export const depsMapper = (context, actions) => ({
  goTo: actions.core.goTo,
  pathTo: actions.core.pathTo,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NavBar);
