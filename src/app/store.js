import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/SignUp/signUpSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    users: userReducer,
  },
});
