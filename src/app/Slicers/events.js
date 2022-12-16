import { createSlice } from "@reduxjs/toolkit";

export const eventSlicer = createSlice({
  name: "events",
  initialState: {
    events: [],
  },
  reducers: {
    editEvents: (state, action) => {
      state.events = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload.data;
        }
        return event;
      });
    },
    addEvents: (state, action) => {
      state.events = [action.payload, ...state.events];
    },
    deleteEvents: (state, action) => {
      state.events = state.events.filter((item) => item.id !== action.payload);
    },
  },
});

export const { editEvents, addEvents, deleteEvents } = eventSlicer.actions;
export default eventSlicer.reducer;
