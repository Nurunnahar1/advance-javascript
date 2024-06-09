const todo_int = document.getElementById("todo_int");
const todo_add = document.getElementById("todo_add");

const db = new Database();

todo_add.onclick = (e) => {
  const todoData = todo_int.value;
  // console.log(todoData);
  db.create("todos", todoData);
};
