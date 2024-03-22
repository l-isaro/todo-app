const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === "") {
    alert("Please enter a task!");
    return;
  }

  todoInput.value = "";
  addTask(newTask);
});

function addTask(task) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("spam");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = todoList.appendChild(listItem);
}
