import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type userStateProps = {
  id: string | null,
  email: string | null,
  token: string | null,
  displayName?: string | null,
  photoUrl: string | null,
  loading?: boolean
};

const initialState: userStateProps = {
  id: null,
  email: null,
  token: null,
  displayName: null,
  photoUrl: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<userStateProps>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
      state.loading = true;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.displayName = null;
      state.photoUrl = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;