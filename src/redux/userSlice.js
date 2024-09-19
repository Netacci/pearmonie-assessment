import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { publicRequest } from '../utils/requestMethods';

const initialState = {
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await publicRequest.post('auth/register', data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const confirmEmail = createAsyncThunk(
  'auth/confirmEmail',
  async (token, thunkAPI) => {
    try {
      const response = await publicRequest.put('auth/verify-email', { token });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const resendVerificationEmail = createAsyncThunk(
  'auth/resend-verification-email',
  async (email, thunkAPI) => {
    try {
      const response = await publicRequest.put(
        'auth/resend-verification-email',
        { email }
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //  handling login action
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export default userSlice.reducer;
