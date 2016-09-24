import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import CheckRole from '../components/check_role.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  if (Meteor.subscribe('user').ready()) {
    onData(null, { user: Meteor.user() });
  }
};

export const depsMapper = (context, actions) => ({
  goTo: actions.core.goTo,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CheckRole);
