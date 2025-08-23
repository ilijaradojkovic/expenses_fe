// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../services/authService';

const initialState = {
    user:null,
    loading:false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => { state.loading = true; })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
}
});

export const { login, logout } = userSlice.actions;

