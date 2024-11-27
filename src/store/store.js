import { configureStore } from "@reduxjs/toolkit";
import bouquetsReducer from "./boquetsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    boquets: bouquetsReducer,
    cart: cartReducer,
  },
});
