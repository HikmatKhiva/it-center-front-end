import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/app";
import { I_IP } from "../../types/types";
const initialState = {
  themeMode: localStorage.getItem('theme') || "light",
  isLight: false,
  isOpen: false,
  clientAgree: false,
  clientInfo: null
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
    clientAgreed: (state) => {
      state.clientAgree = true;
    },
    clientDisAgreed: (state) => {
      state.clientAgree = false;
    },
    setClientInfo: (state,action:PayloadAction<I_IP | any>) => {
      console.log(action.payload);
      state.clientInfo = action.payload
    }
  },
});
export const {
  changeThemeMode,
  handleChangeThemeMode,
  toggleMobileNav,
  toggleHideMobileNav,
  clientAgreed,
  clientDisAgreed,
  setClientInfo
} = settingsSlice.actions;
export const selectThemeMode = (state: RootState) => state.setting;
export default settingsSlice.reducer;
