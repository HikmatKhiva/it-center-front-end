import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/app";
const initialState = {
  themeMode: "light",
  isLight: false,
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
  },
});
export const { changeThemeMode, handleChangeThemeMode } = settingsSlice.actions;
export const selectThemeMode = (state: RootState) => state.setting.themeMode;
export default settingsSlice.reducer;
