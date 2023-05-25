import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const goodSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = goodSlice.actions;

export default goodSlice.reducer;
