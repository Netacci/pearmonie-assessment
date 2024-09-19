import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { userRequest } from '../utils/requestMethod';

const initialState = {
  loading: false,
  error: null,
  user: null,
  users: [],
};

export const getUser = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await userRequest.get('/auth/me');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //  handling login action
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export default userSlice.reducer;
