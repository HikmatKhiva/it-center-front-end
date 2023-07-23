import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/app";
import { ClientState, I_IP } from "../../types/types";
const initialState: ClientState = {
  alertUser: true,
  userInfo: {} as I_IP,
};
const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    hideAlert: (state) => {
      state.alertUser = false;
    },
    showAlert: (state) => {
      state.alertUser = true;
    },
    handleIP: (state, action: PayloadAction<I_IP>) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = {};
    },
  },
});
export const { hideAlert, showAlert, handleIP, clearUserInfo } =
  clientSlice.actions;
export const select = (state: RootState) => state.client;
export default clientSlice.reducer;