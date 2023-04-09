import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMacbook = createAsyncThunk("card/fetchCardStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://642c149b208dfe254727719c.mockapi.io/macbook?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const macbookSlice = createSlice({
  name: "macbook",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchMacbook.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchMacbook.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchMacbook.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = macbookSlice.actions;

export default macbookSlice.reducer;
