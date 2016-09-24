import React from 'react';
import SignIn from './containers/sign-in';
import { mount } from 'react-mounter';

export default function (injectDeps, { FlowRouter, MainLayout }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/sign-in', {
    name: 'signIn',
    action() {
      mount(MainLayoutCtx, {
        content: () => <SignIn />,
      });
    },
  });
}
