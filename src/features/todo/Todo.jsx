import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Input, Typography } from "@mui/material";

import {
  addTodo,
  deleteTodo,
  firebaseTodos,
  mainInputChange,
  editTodo,
} from "./todoSlice";

export default function Todo() {
  const { todoList, currentValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(firebaseTodos());
  }, []);

  const handleMainInputChange = (e) => {
    dispatch(mainInputChange(e.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ title: currentValue }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Redux Toolkit Todo App</Typography>
      <Input
        value={currentValue}
        onChange={handleMainInputChange}
        placeholder="Enter your new todo"
      />
      <Button onClick={handleAddTodo} color="success" variant="contained">
        Add
      </Button>
      {todoList.map((todo) => {
        return (
          <Container sx={{ m: 1 }} key={Math.random()}>
            <Input value={todo.title} readOnly={todo.editable} />
            <Button
              onClick={() => handleEditTodo(todo.id)}
              sx={{ m: 1 }}
              variant="contained"
              color="warning"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteTodo(todo.id)}
              sx={{ m: 1 }}
              color="error"
              variant="contained"
            >
              Remove
            </Button>
          </Container>
        );
      })}
    </Container>
  );
}
