import { createSlice } from "@reduxjs/toolkit";

export const actionSlicer = createSlice({
  name: "actions",
  initialState: {
    projectActions: null,
  },
  reducers: {
    setProjectAction: (state, action) => {
      state.projectActions = action.payload;
    },
  },
});

export const { setProjectAction } = actionSlicer.actions;
export default actionSlicer.reducer;
