const todoForm = document.querySelector('[data-form="todo-form"]');
const todoList = document.querySelector('[data-form="todo-list"]');

/**
 *
 * @param {object} formData
 */
const buildTasks = (formData) => {
  // List key/value pairs
  for (let [name, value] of formData) {
    const setTask = {
      id: Math.floor(Math.random() * Date.now()),
      status: false,
      [name]: value,
    };
    setTasks(setTask);
  }
};

/**
 *
 * @param {tasks} lists of task added
 */
const setTasks = (tasks) => {
  // create list
  const createList = document.createElement("li");

  const createItem = document.createElement("span");
  createItem.textContent = tasks["task"];

  // delete button
  const deleteItem = document.createElement("button");
  deleteItem.textContent = "delete";
  deleteItem.setAttribute("id", tasks["id"]);

  createList.append(createItem);
  createList.append(deleteItem);
  todoList.append(createList);

  // delete item
  deleteItem.addEventListener("click", (event) => {
    const itemToBeDelete = event.target.id;
    const removeItem = event.target.parentNode.remove();
    console.log(
      "🚀 ~ file: chapter-1.js ~ line 43 ~ deleteItem.addEventListener ~ itemToBeDelete",
      itemToBeDelete
    );
  });
};

/**
 *
 * @param {object} event
 */
todoForm.onsubmit = (event) => {
  // prevent page to reload
  event.preventDefault();
  // initialize FormData
  const formData = new FormData(todoForm);
  buildTasks(formData);
  todoForm.reset();
};
