import { createSlice } from "@reduxjs/toolkit";

export const taskSlicer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    createNewTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload.values;
        }
        return task;
      });
    },
    createNewSubTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            subTasks: [action.payload.values, ...task.subTasks],
          };
        }
        return task;
      });
    },
    editSubTasks: (state, action) => {
      
    }
  },
});

export const { createNewTask, createNewSubTask, deleteTask, editTask } =
  taskSlicer.actions;
export default taskSlicer.reducer;
