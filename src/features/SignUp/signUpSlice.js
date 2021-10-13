import { createSlice } from "@reduxjs/toolkit";

import { addUserToFirebase } from "../../services/firebaseServices";

const initialState = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      addUserToFirebase(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
