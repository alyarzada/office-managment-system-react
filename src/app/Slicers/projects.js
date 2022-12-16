import { createSlice } from "@reduxjs/toolkit";

export const projectSlicer = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    createProject: (state, action) => {
      state.projects = [action.payload, ...state.projects];
    },
    reOrderProjects: (state, action) => {
      state.projects = action.payload;
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (item) => item.id !== action.payload
      );
    },
    editProject: (state, action) => {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload.values;
        }
        return project;
      });
    },
  },
});

export const { createProject, reOrderProjects, deleteProject, editProject } =
  projectSlicer.actions;
export default projectSlicer.reducer;