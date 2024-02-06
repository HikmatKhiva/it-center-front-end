import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/app";
import { toast } from "react-toastify";
import { newLocation } from "../../server/newLocation";
import { client } from "../../server/client";
const initialState: ClientState = {
  alertUser: true,
  userInfo: null,
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
    clearUserInfo: (state) => {
      state.userInfo = null;
      state.alertUser = false;
    },
    handleSave: (state, action: PayloadAction<Type_IP | null>) => {
      try {
        if (location) {
          state.userInfo = action.payload
          client.create(newLocation(action.payload));
          toast.success(`Sizning ip manzilingiz saqlandi`);
        }
        state.alertUser = false
      } catch (err) {
        toast.error(`Something went wrong ${err}`);
        state.alertUser = false
      }
    }
  },
});
export const { hideAlert, showAlert, clearUserInfo, handleSave } =
  clientSlice.actions;
export const select = (state: RootState) => state.client;
export default clientSlice.reducer;