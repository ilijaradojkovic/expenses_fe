// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/authService";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetErrorText: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

    //==============LOGIN================
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

       //==============REGISTER================
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        
        state.loading = false;
        console.log(action.payload)
      });
  },
});

export const { resetErrorText } = userSlice.actions;
