import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userLogin",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload.message;
    },
  },
});
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
