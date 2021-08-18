import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type messageType = "info" | "alert";
export interface ModalState {
  message: string | null;
  type: messageType | null;
}

const initialState: ModalState = {
  message: null,
  type: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMessage: (
      state,
      action: PayloadAction<{ message: string; type?: messageType }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type ?? "info";
    },
    clearMessage: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMessage, clearMessage } = modalSlice.actions;

export default modalSlice.reducer;
