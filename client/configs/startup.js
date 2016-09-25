import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import i18n from 'meteor/universe:i18n';

Meteor.startup(() => {
  injectTapEventPlugin();
  i18n.setLocale('uk-UA');
});
