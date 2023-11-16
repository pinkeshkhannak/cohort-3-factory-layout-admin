const getSaveData = (api) => (next) => (action) => {
  if (action.type === "api/executeMutation/pending" && action.meta.arg.endpointName === "save") {
    const { LayoutConfigurationCard, Settings } = api.getState();

    action.meta.arg.originalArgs = {
      name: Settings.layoutName,
      direction: Settings.facingDirection,
      arrays: LayoutConfigurationCard.displayArray,
    };
  }
  return next(action);
};

export default getSaveData;
