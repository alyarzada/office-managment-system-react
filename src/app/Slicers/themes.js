import { createSlice } from "@reduxjs/toolkit/";

export const themes = createSlice({
  name: "themes",
  initialState: {
    openedSidebar: false,
    light: false,
    boxed: false,
    leftLight: "dark",
    scrollable: false,
    disableTransform: false,
  },
  reducers: {
    setOpenedSidebar: (state) => {
      state.openedSidebar = !state.openedSidebar;
    },
    setLight: (state, action) => {
      state.light = action.payload;
    },
    setBoxed: (state, action) => {
      state.boxed = action.payload;
    },
    setLeftLight: (state, action) => {
      state.leftLight = action.payload;
    },
    setScrollable: (state, action) => {
      state.scrollable = action.payload;
    },
    setTransform: (state, action) => {
      state.disableTransform = action.payload;
    },
  },
});

export const {
  setOpenedSidebar,
  setLight,
  setBoxed,
  setLeftLight,
  setScrollable,
  setTransform
} = themes.actions;
export default themes.reducer;
