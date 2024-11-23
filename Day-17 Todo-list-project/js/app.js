let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("addTaskBtn");
let todoList = document.getElementById("todoList");

// todo items
let todos = ["Item one", "Item two", "Item three"];

// add event listener
taskBtn.addEventListener("click", function () {
  addTask(taskInput.value);
});

// add task
function addTask(item) {
  if (item == "") {
    alert("item cannot be blank!");
    return;
  }
  // add item to the array list
  todos.push(item);
  // refresh the list
  renderItem();
}

// render html
function renderItem() {
  todos.forEach(function (task) {
    // create li element
    let li = document.createElement("li");

    // push item to the created li
    li.innerHTML = task;

    // append the li to the Ul
    todoList.appendChild(li);

  });
}
renderItem();
