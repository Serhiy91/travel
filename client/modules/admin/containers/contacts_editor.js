import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ContactsEditor from '../components/contacts_editor.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('contacts').ready()) {
    const contacts = Collections.Contacts.findOne() || {};
    onData(null, { contacts });
  }
};

export const depsMapper = (context, actions) => ({
  updateContacts: actions.admin.updateContacts,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ContactsEditor);
