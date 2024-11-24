let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("addTaskBtn");
let todoList = document.getElementById("todoList");

// todo items
let todos = [];

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

  // remove the input value
  taskInput.value = "";
}

// remove task
function removeTask(item) {
  // fine the array index
  let index = todos.indexOf(item);
  // remove the item from array 
  todos.slice(index, 1);

  // refresh the ul
  renderItem();
}

// render html
function renderItem() {
  // reset the UL
  todoList.innerHTML = "";

  todos.forEach(function (task) {
    // create li element
    let li = document.createElement("li");

    // push item to the created li
    li.innerHTML = `<span onclick="removeTask('${task}')">${task}</span>`;

    // append the li to the Ul
    todoList.appendChild(li);

  });
}
renderItem();
