import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImac = createAsyncThunk("card/fetchCardStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://642c149b208dfe254727719c.mockapi.io/imac?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const imacSlice = createSlice({
  name: "imac",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchImac.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchImac.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchImac.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = imacSlice.actions;

export default imacSlice.reducer;
