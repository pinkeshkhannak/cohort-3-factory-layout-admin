import { configureStore } from "@reduxjs/toolkit";
import LayoutConfigurationCardSliceReducer from "./components/LayoutConfig/LayoutConfigurationCardSlice";
import SettingsReducer from "./components/SettingsCard/SettingsSlice";

export default configureStore({
  reducer: {
    LayoutConfigurationCard: LayoutConfigurationCardSliceReducer,
    Settings: SettingsReducer,
  },
});
