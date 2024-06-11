const todo_int = document.getElementById("todo_int");
const todo_add = document.getElementById("todo_add");
const todo_list = document.getElementById("todo_list");

const db = new Database();
/**
 * Get all Todos*
 *  */
const getAllTodos = () => {
  const data = db.find("todos") || []; // Initialize data to an empty array if null

  let list = "";
  data.map((item, index) => {
    list += `<li class="list-group-item d-flex justify-content-between"> ${item}
                <button class="btn btn-sm btn-danger" onclick="deleteTodos('${item}')">x</button>
                </li>`;
  });
  todo_list.innerHTML = list;
};
getAllTodos();

/**
 * Create new Todos
 * @param {*} e
 */
todo_add.onclick = (e) => {
  const todoData = todo_int.value;
  // console.log(todoData);
  db.create("todos", todoData);
  getAllTodos();
};

const deleteTodos = (item) => {
  //   console.log("item");
  db.delete("todos", item);
  getAllTodos();
};
