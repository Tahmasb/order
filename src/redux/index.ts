import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "@redux/slices/message";

const store = configureStore({
  reducer: {
    messages: messageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
