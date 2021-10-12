import { db } from "../initFirebase";

export function addTodoToFirebase(title) {
  db.ref("/todos/").push({
    title,
    completed: false,
    editable: false,
  });
}

export function deleteTodoFromFirebase(id) {
  db.ref("/todos/" + id).remove();
}

export function editTodoFromFirebase(id) {
  const todoRef = db.ref("/todos/" + id);

  todoRef.update({ editable: true });
}

export function saveEditedTodoInFirebase(id, title) {
  db.ref("/todos/").child(id).update({ editable: false, title });
}

export function getTodos() {
  const listTodos = [];
  return new Promise((resolve) => {
    db.ref("/todos/").once("value", (snapshot) => {
      snapshot.forEach((el) => {
        listTodos.push({
          completed: el.val().completed,
          title: el.val().title,
          id: el.key,
          editable: el.val().editable,
        });
      });
      resolve(listTodos);
    });
  });
}

export function addUserToFirebase({ userName, password }) {
  db.ref("/users/").push({
    userName,
    password,
  });
}
