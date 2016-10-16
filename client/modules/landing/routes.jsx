import React from 'react';
import { mount } from 'react-mounter';

import LandingPage from './containers/landing_page';

export default function (injectDeps, { FlowRouter, MainLayout }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'landing',
    action() {
      mount(MainLayoutCtx, {
        content: () => <LandingPage />,
      });
    },
  });

  FlowRouter.route('/tours', {
    name: 'tours',
    action() {
      mount(MainLayoutCtx, {
        content: () => <div>tours</div>,
      });
    },
  });

  FlowRouter.route('/visas', {
    name: 'visas',
    action() {
      mount(MainLayoutCtx, {
        content: () => <div>visas</div>,
      });
    },
  });

  FlowRouter.route('/news', {
    name: 'news',
    action() {
      mount(MainLayoutCtx, {
        content: () => <div>news</div>,
      });
    },
  });

  FlowRouter.route('/contacts', {
    name: 'contacts',
    action() {
      mount(MainLayoutCtx, {
        content: () => <div>contacts</div>,
      });
    },
  });
}
