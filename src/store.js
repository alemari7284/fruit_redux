import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./fruitSlice";

export default configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});
