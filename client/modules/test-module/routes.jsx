import React from 'react';
import { mount } from 'react-mounter';

import TestPage from './components/test-module.jsx';

export default function (injectDeps, { FlowRouter, MainLayout }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'test',
    action() {
      mount(MainLayoutCtx, {
        content: () => <TestPage />,
      });
    },
  });
}
