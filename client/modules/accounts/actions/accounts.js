export default {
  signIn({ Meteor, LocalState, FlowRouter }, email, password) {
    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        LocalState.set('LOGIN_ERROR', err.reason);
      } else {
        FlowRouter.go('/');
      }
    });
  },
};
