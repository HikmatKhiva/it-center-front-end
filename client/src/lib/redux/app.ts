import { configureStore } from "@reduxjs/toolkit";
import admin from "./reducer/admin";
import { getData } from "../../utils/localStorage";
export const store = configureStore({
  reducer: {
    admin,
  },
  preloadedState:{
    admin:{admin:getData('admin')}
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
