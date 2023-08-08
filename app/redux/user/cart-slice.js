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
        count: 0,
      },
      {
        name: "30 монет IDEA",
        img: "/cart/item2.png",
        cost: 1950,
        discount: 6400,
        count: 0,
      },
    ],
    amount: 0,
    totalPrice: 0,
  },
  reducers: {
    pushItems(state, action) {
      state.items.push(action.payload);
      state.amount = state.items.length;
      console.log(action.payload);
    },
    setItems(state, action) {
      state.items = action.payload;
      state.amount = state.items.length;
    },
    deleteItems(state, action) {
      state.items = state.items.filter((item) => {
        if (item.name !== action.payload.name) {
          return item;
        }
      });
      state.amount = state.items.length;
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
    setAmount(state) {
      state.amount = state.items.length;
    },
    setTotalPrice(state) {
      let cost = 0;
      if (state.items.length) {
        state.items.map((item) => {
          if (item.discount) {
            cost += item.discount * item.count;
          } else {
            cost += item.cost * item.count;
          }
        });
      }
      if (state.coins.length) {
        state.coins.map((item) => {
          if (item.discount) {
            cost += item.discount * item.count;
          } else {
            cost += item.cost * item.count;
          }
        });
      }
      state.totalPrice = cost;
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
  setTotalPrice,
} = cartSlice.actions;
