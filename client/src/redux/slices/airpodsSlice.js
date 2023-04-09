import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAirpods = createAsyncThunk("card/fetchCardStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://642c149b208dfe254727719c.mockapi.io/airpods?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const airpodsSlice = createSlice({
  name: "airpods",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchAirpods.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchAirpods.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchAirpods.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = airpodsSlice.actions;

export default airpodsSlice.reducer;
