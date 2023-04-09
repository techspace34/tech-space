import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIpad = createAsyncThunk("card/fetchCardStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://642c149b208dfe254727719c.mockapi.io/ipad?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const ipadSlice = createSlice({
  name: "ipad",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchIpad.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchIpad.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchIpad.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = ipadSlice.actions;

export default ipadSlice.reducer;
