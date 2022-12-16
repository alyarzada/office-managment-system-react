import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// generate pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

export const userSlicer = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: "",
  },
  reducers: {
    createUser: (state, action) => {
      state.users = [action.payload, ...state.users];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { createUser } = userSlicer.actions;
export default userSlicer.reducer;
