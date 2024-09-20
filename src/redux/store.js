import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import userReducer from './userSlice.js';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
