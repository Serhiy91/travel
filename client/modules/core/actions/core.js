export default {
  goTo({ FlowRouter }, routName, params, queryParams) {
    FlowRouter.go(routName, params, queryParams);
  },
  pathTo({ FlowRouter }, routName, params, queryParams) {
    return FlowRouter.path(routName, params, queryParams);
  },
};
