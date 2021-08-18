import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  message: string | null;
}

const initialState: ModalState = {
  message: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMessage } = modalSlice.actions;

export default modalSlice.reducer;
