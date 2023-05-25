import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGoods = createAsyncThunk('item/fetchGoodsStatus', async ({ params }) => {
  const { category, search, sortBy, order, currentPage } = params;
  const { data } = await axios.get(
    `https://6467661d2ea3cae8dc2d9f13.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
};

const goodSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setGoods(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.items = [];
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchGoods.rejected, (state) => {
        state.items = [];
        state.status = 'error';
      });
  },
});

export const { setGoods } = goodSlice.actions;

export default goodSlice.reducer;
