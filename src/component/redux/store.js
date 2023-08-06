import { configureStore } from "@reduxjs/toolkit";
import { selectedRow_reducer } from "./reducer";
import { selectedTime_reducer } from "./reducer";

export const store = configureStore({
  reducer: {
    selectedRow_reducer,
    selectedTime_reducer
  },
});