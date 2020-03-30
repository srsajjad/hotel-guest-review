import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

export const msgSlice = createSlice({
  name: "msg",
  initialState: data,
  reducers: {
    updateMessage: (state, action) => {
      const { id, message } = action.payload;

      const which = state.findIndex(x => x.id == id);
      state[which].message = message;
    },

    updateReview: (state, action) => {
      const { id, review } = action.payload;
      const which = state.findIndex(x => x.id == id);
      state[which].review = review;
    },

    updateReviewMsg: (state, action) => {
      const { id, reviewMsg } = action.payload;
      const which = state.findIndex(x => x.id == id);
      state[which].reviewMsg = reviewMsg;
    }
  }
});

// slice.reducer
// msgSlice.actions
