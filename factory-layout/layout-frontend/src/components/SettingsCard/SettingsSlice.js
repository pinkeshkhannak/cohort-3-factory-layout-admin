import { createSlice } from "@reduxjs/toolkit";

export const SettingsSlice = createSlice({
  name: "Settings",
  initialState: {
    layoutName: "",
    facingDirection: null,
  },
  reducers: {
    handleLayoutNameChange: (state, action) => {
      state.layoutName = action.payload.value;
    },

    handleFacingDirectionChange: (state, action) => {
      state.facingDirection = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLayoutNameChange, handleFacingDirectionChange } = SettingsSlice.actions;

export default SettingsSlice.reducer;
