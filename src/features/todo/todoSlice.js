import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addTodoToFirebase,
  deleteTodoFromFirebase,
  editTodoFromFirebase,
  getTodos,
  saveEditedTodoInFirebase,
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
  editInputValue: "",
  todoEditable: false,
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    mainInputChange: (state, action) => {
      state.currentValue = action.payload;
    },

    eachInputChange: (state, action) => {
      state.editInputValue = action.payload;
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

    editTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.editInputValue = state.todoList[index].title;
      const changedTodo = {
        ...state.todoList[index],
        title: state.editInputValue,
        editable: true,
      };
      editTodoFromFirebase(action.payload);
      state.todoList.splice(index, 1, changedTodo);
      state.todoEditable = true;
    },

    saveTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );

      const editedTodo = {
        ...state.todoList[index],
        title: state.editInputValue,
        editable: false,
      };

      saveEditedTodoInFirebase(action.payload.id, action.payload.title);
      state.todoList.splice(index, 1, editedTodo);
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(firebaseTodos.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log("action.payload", action.payload);
      state.todoList.push(...action.payload.reverse());
    });
  },
});

export const {
  addTodo,
  mainInputChange,
  deleteTodo,
  editTodo,
  eachInputChange,
  saveTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
