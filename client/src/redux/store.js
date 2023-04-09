import { configureStore } from "@reduxjs/toolkit";
import airpods from "./slices/airpodsSlice";
import applewatch from "./slices/applewatchSlice";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import imac from "./slices/imacSlice";
import ipad from "./slices/ipadSlice";
import iphone from "./slices/iphoneSlice";
import macbook from "./slices/macbookSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    iphone,
    airpods,
    ipad,
    applewatch,
    macbook,
    imac
  },
});
