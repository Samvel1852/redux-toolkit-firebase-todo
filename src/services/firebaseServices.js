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

export function getTodos() {
  const listTodos = [];
  return new Promise((resolve) => {
    db.ref("/todos/").once("value", (snapshot) => {
      snapshot.forEach((el) => {
        listTodos.push({
          completed: el.val().completed,
          title: el.val().title,
          id: el.key,
          isEdit: el.val().isEdit,
        });
      });
      resolve(listTodos);
    });
  });
}
