import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app";
const initialState: InitialStateAdmin = {
  admin: null,
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAdmin>) => {
      const expirationTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
      state.admin = { ...action.payload, expirationTime };
      localStorage.setItem("admin", JSON.stringify(state.admin));
    },
    logout: (state) => {
      localStorage.removeItem("admin");
      state.admin = null;
    },
    updateProfilePicture: (state, action: PayloadAction<string>) => {
      if (state.admin) {
        state.admin.photo_url = action.payload;
        localStorage.setItem("admin", JSON.stringify(state.admin));
      }
    },
    updateProfile: (state, action: PayloadAction<IAdminProfile>) => {
      if (state.admin) {
        state.admin.email = action.payload.email;
        state.admin.username = action.payload.username;
        localStorage.setItem("admin", JSON.stringify(state.admin));
      }
    },
  },
});
export const { login, logout, updateProfilePicture, updateProfile } =
  adminSlice.actions;
export const select = (state: RootState) => state.admin;
export default adminSlice.reducer;
