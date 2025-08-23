// store.js
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../redux/userSlice';

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
