// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import aiReducer from './reducers';

const store = configureStore({
  reducer: aiReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
