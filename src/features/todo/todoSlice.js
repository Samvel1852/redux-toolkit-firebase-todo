import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addTodoToFirebase,
  deleteTodoFromFirebase,
  getTodos,
} from "../../services/firebaseServices";

export const firebaseTodos = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await getTodos();
    return response;
  }
);

const initialState = {
  currentValue: "",
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    mainInputChange: (state, action) => {
      state.currentValue = action.payload;
    },

    addTodo: (state, action) => {
      addTodoToFirebase(action.payload.title);
      state.todoList.unshift(action.payload);
    },

    deleteTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      deleteTodoFromFirebase(action.payload);
      state.todoList.splice(index, 1);
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(firebaseTodos.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("action.payload", action.payload);
      state.todoList.push(...action.payload.reverse());
    });
  },
});

export const { addTodo, mainInputChange, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
