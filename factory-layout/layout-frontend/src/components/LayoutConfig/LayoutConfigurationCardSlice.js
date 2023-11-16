import { createSlice } from "@reduxjs/toolkit";

export const LayoutConfigurationCardSlice = createSlice({
  name: "LayoutConfigurationCard",
  initialState: {
    displayArray: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  reducers: {
    changeArrayIndex: (state, action) => {
      state.displayArray[action.payload.x][action.payload.y] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeArrayIndex } = LayoutConfigurationCardSlice.actions;

export default LayoutConfigurationCardSlice.reducer;
