import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApplewatch = createAsyncThunk("card/fetchCardStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://642c149b208dfe254727719c.mockapi.io/applewatch?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const applewatchSlice = createSlice({
  name: "applewatch",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchApplewatch.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchApplewatch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchApplewatch.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = applewatchSlice.actions;

export default applewatchSlice.reducer;
