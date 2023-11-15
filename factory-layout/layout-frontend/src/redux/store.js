import { configureStore } from "@reduxjs/toolkit";
import LayoutConfigurationCardSliceReducer from "../components/LayoutConfig/LayoutConfigurationCardSlice";
import SettingsReducer from "../components/SettingsCard/SettingsSlice";
import { apiSlice } from "./apiSlice";

export default configureStore({
  reducer: {
    LayoutConfigurationCard: LayoutConfigurationCardSliceReducer,
    Settings: SettingsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
