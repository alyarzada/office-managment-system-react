import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themesReducer from "./Slicers/themes";
import eventReducer from "./Slicers/events";
import taskReducer from "./Slicers/tasks";
import actionReducer from "./Slicers/actions";
import userReducer from "./Slicers/users";
import projectReducer from "./Slicers/projects";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    events: eventReducer,
    tasks: taskReducer,
    actions: actionReducer,
    users: userReducer,
    projects: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});