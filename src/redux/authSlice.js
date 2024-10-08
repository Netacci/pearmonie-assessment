import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest } from '../utils/requestMethod.js';

const initialState = {
  loading: false,
  error: null,
};

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await publicRequest.post('/auth/login', data);

    localStorage.setItem('pear-token', response.data.accessToken);
    localStorage.setItem('pear-refreshToken', response.data.refreshToken);

    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
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

export default authSlice.reducer;
