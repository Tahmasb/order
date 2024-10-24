import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
  message: string;
  isShow: boolean;
  severity: "success" | "error" | "warning" | "info" | "" | undefined;
}

const initialState: MessageState = {
  message: "",
  isShow: false,
  severity: "success",
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (
      state,
      action: PayloadAction<{
        message: string;
        severity?: "success" | "error" | "warning" | "info" | "";
        isShow?: boolean;
      }>
    ) => {
      state.isShow = action.payload.isShow ?? true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
