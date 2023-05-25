import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import goodReducer from './slices/goodSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    goodReducer,
  },
});
