import { createSlice } from "@reduxjs/toolkit";

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
      state.todoList.unshift(action.payload);
    },

    deleteTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      console.log(index);
      state.todoList.splice(index, 1);
    },
  },
});

export const { addTodo, mainInputChange, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
