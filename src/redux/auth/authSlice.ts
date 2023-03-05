import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "firebase/auth";

export type authState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: authState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.loading = true;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;