import { configureStore } from "@reduxjs/toolkit";
import setting from "../reducer/setting";
import client from "../reducer/client";
export const store = configureStore({
  reducer: {
    setting,
    client,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
