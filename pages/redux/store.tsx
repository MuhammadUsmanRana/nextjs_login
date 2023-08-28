import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./createSlices";

export const store = configureStore({
  reducer: {
    crudSlice: crudReducer,
  },
});
