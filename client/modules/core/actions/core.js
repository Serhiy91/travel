export default {
  goTo({ FlowRouter }, routName, params, queryParams) {
    FlowRouter.go(routName, params, queryParams);
  },
};
