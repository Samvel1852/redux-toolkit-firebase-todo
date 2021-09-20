import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Container, Input, Typography } from "@mui/material";
import { addTodo, deleteTodo, mainInputChange } from "./todoSlice";

export default function Todo() {
  const { todoList, currentValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleMainInputChange = (e) => {
    dispatch(mainInputChange(e.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ title: currentValue, id: todoList.length + 1 }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
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
            <Input value={todo.title} readOnly={true} />
            <Button sx={{ m: 1 }} variant="contained" color="warning">
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
