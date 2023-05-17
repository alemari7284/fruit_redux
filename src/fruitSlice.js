// fruitSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFruits = createAsyncThunk("fruit/fetchFruits", async () => {
  const response = await axios.get("http://localhost:4000");
  return response.data;
});

const fruitSlice = createSlice({
  name: "fruit",
  initialState: {
    fruitList: [],
    cart: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      console.log(action.payload);
      const fruit = state.cart.find((item) => item.id === id);
      const fruitL = state.fruitList.find((item) => item.id === id);
      if (fruit) {
        fruit.quantity += 1; // Increment quantity if the fruit is already in the cart
        fruitL.quantity--;
      } else {
        state.cart.push({ id, name, price, quantity: 1 }); // Add the fruit to the cart if not present
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruits.pending, (state) => {
        console.log("STO CHIAMANDO");
        state.isLoading = true;
      })
      .addCase(fetchFruits.fulfilled, (state, action) => {
        console.log("HO CHIAMATO");
        state.isLoading = false;
        state.fruitList = action.payload;
      })
      .addCase(fetchFruits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart } = fruitSlice.actions;

export default fruitSlice.reducer;
