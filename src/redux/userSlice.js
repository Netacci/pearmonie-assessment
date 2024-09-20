import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { userRequest } from '../utils/requestMethod';

const initialState = {
  loading: false,
  error: null,
  user: null,
  users: [],
};

export const getUser = createAsyncThunk('user/single', async (_, thunkAPI) => {
  try {
    const response = await userRequest.get('/auth/me');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getAllUsers = createAsyncThunk(
  'users/all',
  async ({ limit, page }, thunkAPI) => {
    try {
      const response = await userRequest.get(
        `/users?limit=${limit}&skip=${page}`
      );

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
        state.error = action.payload;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
