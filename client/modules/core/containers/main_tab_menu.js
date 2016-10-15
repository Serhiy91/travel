import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import MainTabMenu from '../components/partial/main_tab_menu.jsx';

export const composer = ({ context }, onData) => {
  const { FlowRouter } = context();
  const currentRoute = FlowRouter.getRouteName();
  onData(null, { currentRoute });
};

export const depsMapper = (context, actions) => ({
  goTo: actions.core.goTo,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainTabMenu);
