import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/app";
const initialState = {
  themeMode: localStorage.getItem("theme") || "light",
  isLight: false,
  isOpen: false,
};
const settingsSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
    handleChangeThemeMode: (state) => {
      state.isLight ? (state.themeMode = "light") : (state.themeMode = "dark");
      state.isLight = !state.isLight;
    },
    toggleMobileNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleHideMobileNav: (state) => {
      state.isOpen = false;
    },
  },
});
export const {
  changeThemeMode,
  handleChangeThemeMode,
  toggleMobileNav,
  toggleHideMobileNav,
} = settingsSlice.actions;
export const select = (state: RootState) => state.setting;
export default settingsSlice.reducer;