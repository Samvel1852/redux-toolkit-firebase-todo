import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Input, Typography } from "@mui/material";

import {
  addTodo,
  deleteTodo,
  firebaseTodos,
  mainInputChange,
  editTodo,
  eachInputChange,
  saveTodo,
} from "./todoSlice";

import { ROUTES } from "../../constants/routes";

export default function Todo() {
  // const [todoEditable, setTodoEditable] = useState(false);

  const { todoList, currentValue, editInputValue } = useSelector(
    (state) => state.todo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!todoList.length) dispatch(firebaseTodos());
  }, []);

  const handleMainInputChange = (e) => {
    dispatch(mainInputChange(e.target.value));
  };

  const handleEachTodoChange = (e) => {
    dispatch(eachInputChange(e.target.value));
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

  const handleSaveTodo = (id, title) => {
    dispatch(saveTodo({ id, title }));
  };

  return (
    <>
      <Container style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Link to={ROUTES.login}>
          <Button color="primary" variant="contained">
            Sign out
          </Button>
        </Link>
      </Container>
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
          console.log(todo);
          return (
            <Container sx={{ m: 1 }} key={Math.random()}>
              <Input
                onChange={handleEachTodoChange}
                value={todo.editable ? editInputValue : todo.title}
                readOnly={!todo.editable}
                autoFocus={todo.editable}
              />
              {todo.editable ? (
                <Button
                  onClick={() => handleSaveTodo(todo.id, editInputValue)}
                  sx={{ m: 1 }}
                  variant="contained"
                  color="warning"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={() => handleEditTodo(todo.id)}
                  sx={{ m: 1 }}
                  variant="contained"
                  color="warning"
                >
                  Edit
                </Button>
              )}

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
    </>
  );
}
