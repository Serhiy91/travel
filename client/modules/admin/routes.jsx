import React from 'react';
import AdminLayout from '../core/components/admin_layout';
import CheckRole from '../core/containers/check_role';
import { mount } from 'react-mounter';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(AdminLayout);

  FlowRouter.route('/admin', {
    name: 'admin',
    action() {
      mount(MainLayoutCtx, {
        content: () => <CheckRole admin><div>Admin</div></CheckRole>,
      });
    },
  });
}
