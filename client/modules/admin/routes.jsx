import React from 'react';
import AdminLayout from '../core/components/admin_layout';
import CheckRole from '../core/containers/check_role';
import AdminNews from './containers/admin_news';
import NewsForm from './containers/news_form';
import { mount } from 'react-mounter';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(AdminLayout);

  const adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
  });

  adminRoutes.route('/tours', {
    name: 'admin.tours',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><div>Tours</div></CheckRole>,
      });
    },
  });

  adminRoutes.route('/visas', {
    name: 'admin.visas',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><div>Visas</div></CheckRole>,
      });
    },
  });

  const newsRoutes = adminRoutes.group({
    prefix: '/news',
    name: 'admin.news',
  });

  newsRoutes.route('/', {
    name: 'admin.news',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><AdminNews /></CheckRole>,
      });
    },
  });

  newsRoutes.route('/add', {
    name: 'admin.news.add',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><NewsForm /></CheckRole>,
      });
    },
  });

  newsRoutes.route('/edit/:articleId', {
    name: 'admin.news.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><NewsForm /></CheckRole>,
      });
    },
  });

  adminRoutes.route('/contacts', {
    name: 'admin.contacts',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><div>Contacts</div></CheckRole>,
      });
    },
  });
}
