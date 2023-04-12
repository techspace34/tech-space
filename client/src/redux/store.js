import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import airpods from "./slices/airpodsSlice";
import applewatch from "./slices/applewatchSlice";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import imac from "./slices/imacSlice";
import ipad from "./slices/ipadSlice";
import iphone from "./slices/iphoneSlice";
import macbook from "./slices/macbookSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  filter,
  cart,
  iphone,
  airpods,
  ipad,
  applewatch,
  macbook,
  imac,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);