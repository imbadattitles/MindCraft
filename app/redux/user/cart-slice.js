import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    coins: [
      {
        name: "10 монет IDEA",
        img: "/cart/item2.png",
        cost: 1950,
        discount: 6400,
        count: 1,
      },
      {
        name: "20 монет IDEA",
        img: "/cart/item2.png",
        cost: 1950,
        discount: 6400,
        count: 1,
      },
      {
        name: "30 монет IDEA",
        img: "/cart/item2.png",
        cost: 1950,
        discount: 6400,
        count: 1,
      },
    ],
    amount: 0,
  },
  reducers: {
    pushItems(state, action) {
      state.items.push(action.payload);
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    deleteItems(state, action) {
      state.items = state.items.filter((item) => {
        if (item.name !== action.payload.name) {
          return item;
        }
      });
    },
    deleteCoins(state, action) {
      state.coins = state.coins.filter((item) => {
        if (item.name !== action.payload.name) {
          return item;
        }
      });
    },
    setCoins(state, action) {
      state.coins = action.payload;
    },
    setAmount(state, action) {
      state.amount = state.items.length;
    },
  },
});

export default cartSlice.reducer;
export const {
  pushItems,
  deleteItems,
  setItems,
  setAmount,
  deleteCoins,
  setCoins,
} = cartSlice.actions;
