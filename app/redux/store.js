import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import cartReducer from "./user/cart-slice";

const RootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
