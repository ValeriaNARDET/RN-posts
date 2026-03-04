import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth";

const initialState: AuthState = {
  userEmail: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userEmail = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = ( state: any ) => state.auth.isAuthenticated;
export default authSlice.reducer;