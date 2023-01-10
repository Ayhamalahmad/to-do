let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let taskdiv = document.querySelector(".tasks");
// empty Array to Store The Tasks
let arrayofTask = [];

//ckeck if Theres Tasks In local Storgage
if (localStorage.getItem("tasks")) {
  arrayofTask = JSON.parse(localStorage.getItem("tasks"));
}
// Trigger get Data from  local Storage
getDAtaFromLocalStorage();

// add task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add TAsk To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};
// Click On  Task Element
taskdiv.addEventListener("click", (e) => {
  //delete
  if (e.target.classList.contains("del")) {
    // remove  Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // remove Task From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    //  Toggle completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done class
    e.target.classList.toggle("done");
  }
});
function addTaskToArray(taskTexk) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskTexk,
    completed: false,
  };
  //Push Task To Array Of Tasks
  arrayofTask.push(task);
  // Add Task To Page
  addElemnetTopageFrom(arrayofTask);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayofTask);
}

function addElemnetTopageFrom(arrayofTask) {
  // Empty Tasks Div
  taskdiv.innerHTML = "";
  // Looping On Array of Tasks
  arrayofTask.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    //  check if  Task Done
    if (task.completed === true) {
      div.className = " task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    taskdiv.appendChild(div);
    // console.log(div);
  });
}
function addDataToLocalStorageFrom(arrayofTask) {
  localStorage.setItem("tasks", JSON.stringify(arrayofTask));
}

function getDAtaFromLocalStorage() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElemnetTopageFrom(tasks);
  }
}

function deleteTaskWith(taskid) {
  arrayofTask = arrayofTask.filter((task) => task.id != taskid);
  addDataToLocalStorageFrom(arrayofTask);
}
function toggleStatusTaskWith(taskid) {
  for (let i = 0; i < arrayofTask.length; i++) {
    if (arrayofTask[i].id == taskid) {
      arrayofTask[i].completed == false
        ? (arrayofTask[i].completed = true)
        : (arrayofTask[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayofTask);
}
