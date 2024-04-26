import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    authLoading: false,
    user: { name: "Незарегистрированный пользователь" },
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuth(state, action) {
      state.auth = action.payload;
    },
    isLoading(state, action) {
      state.authLoading = action.payload;
    },
    anLogin(state) {
      state.auth = false;
      state.user = { name: "Незарегистрированный пользователь" };
      localStorage.setItem("auth", false);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "Незарегистрированный пользователь" })
      );
    },
    localStorageParse(state) {
      state.auth = JSON.parse(localStorage.getItem("auth")) || false;
      state.user = JSON.parse(localStorage.getItem("user")) || {
        name: "Незарегистрированный пользователь",
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, setAuth, isLoading, anLogin, localStorageParse } =
  userSlice.actions;
