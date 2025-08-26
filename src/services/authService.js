import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axiosConfig";
import {
  GET_LOGGED_USER_API_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../constants/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginDto, thunkAPI) => {
    try {
      
      // 1. login API -> dobijaš token
      const loginResponse = await api.post(LOGIN_URL, loginDto);
      const accessToken = loginResponse.data.accessToken;
      await AsyncStorage.setItem("token", accessToken);

      // 2. pozovi API za korisnika sa tokenom
      const userResponse = await api.get(GET_LOGGED_USER_API_URL);

      // 3. vrati kompletan objekat (user + token)
      return userResponse.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerDto, thunkAPI) => {
    try {
      // poziv API-ja za registraciju
      const response = await api.post(REGISTER_URL, registerDto);
      console.log("Register response:", response.data);

      // vrati podatke za slice
      return response.data;
    } catch (error) {
      // reject sa error payload-om
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
