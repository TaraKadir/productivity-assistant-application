document.addEventListener('DOMContentLoaded', function () {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || {
      task1: { title: "Task 1 Title", category: "Category 1", description: "This is a description for task 1." },
      task2: { title: "Task 2 Title", category: "Category 2", description: "This is a description for task 2." },
      task3: { title: "Task 3 Title", category: "Category 3", description: "This is a description for task 3." }
  };
  let currentTaskId = null;
  let isEditing = false;
  let newTaskCreated = false; // Track if a new task is created
  function openToDoModal(taskId) {
      let todoNode = document.querySelector("#todo");
      if (!todoNode) return;
      todoNode.classList.add("todo-active");
      currentTaskId = taskId;
      const title = todoNode.querySelector(".todo-title");
      const category = todoNode.querySelector(".category-title");
      const description = todoNode.querySelector(".todo-description");
      if (tasks[taskId]) {
          title.textContent = tasks[taskId].title;
          category.textContent = tasks[taskId].category;
          description.textContent = tasks[taskId].description;
      } else {
          title.textContent = "No Title";
          category.textContent = "No Category";
          description.textContent = "No Description";
      }
      title.removeAttribute("contenteditable");
      category.removeAttribute("contenteditable");
      description.removeAttribute("contenteditable");
      isEditing = false;
  }
  function closeToDo() {
      let todoNode = document.querySelector("#todo");
      if (!todoNode) return;
      if (newTaskCreated && currentTaskId) {
      delete tasks[currentTaskId];
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskCreated = false;
      }
      todoNode.classList.remove("todo-active");
      updateTaskList();
  }
  function enableEditing() {
      if (!isEditing) {
          document.querySelector(".todo-title").setAttribute("contenteditable", "true");
          document.querySelector(".category-title").setAttribute("contenteditable", "true");
          document.querySelector(".todo-description").setAttribute("contenteditable", "true");
          isEditing = true;
      }
  }
  function saveTask() {
      if (currentTaskId) {
          const title = document.querySelector(".todo-title").textContent;
          const category = document.querySelector(".category-title").textContent;
          const description = document.querySelector(".todo-description").textContent;
          tasks[currentTaskId] = { title, category, description };
          localStorage.setItem("tasks", JSON.stringify(tasks));
          updateTaskList();
          closeToDo();
      }
  }
  function updateTaskList() {
      const taskList = document.getElementById("todo-list");
      taskList.innerHTML = "";
      Object.keys(tasks).forEach(taskId => {
          const task = tasks[taskId];
          const li = document.createElement("li");
          // Apply strikethrough if the task is completed
          if (task.checked) {
          li.classList.add("completed"); // Add class for completed task
      }
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;
      taskTitle.classList.add("task-title");
      // Custom Checkbox
      const checkboxLabel = document.createElement("label");
      checkboxLabel.classList.add("custom-checkbox");
      const checkboxInput = document.createElement("input");
      checkboxInput.type = "checkbox";
      checkboxInput.classList.add("checkbox-input");
      checkboxInput.id = taskId;
      checkboxInput.checked = task.checked || false;
      const checkboxIcon = document.createElement("span");
      checkboxIcon.classList.add("checkbox-icon");
      // Add your custom icon (example using an image)
      const customIcon = document.createElement("img");
      customIcon.src = "/images/iconunchecked.svg"; // Replace with your icon path
      checkboxIcon.appendChild(customIcon);
      // Hide the default checkbox (this will only affect the appearance, it will still be interactive)
      checkboxInput.style.display = "none";
      checkboxLabel.appendChild(checkboxInput);
      checkboxLabel.appendChild(checkboxIcon);
      // Event listener for checkbox click
      checkboxInput.addEventListener("change", function() {
          task.checked = checkboxInput.checked; // Update task's checked state
          localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the state to localStorage
          updateTaskList(); // Update list after change
  // If the task is checked (completed), trigger confetti
  if (checkboxInput.checked) {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
});
// Confetti function
const count = 400,
  defaults = {
    origin: { y: 0.91 },
  };
function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}
          const showTaskBtn = document.createElement("button");
          showTaskBtn.textContent = "Show Task Card";
          showTaskBtn.classList.add("show-task-btn");
          showTaskBtn.setAttribute("data-task", taskId);
          showTaskBtn.addEventListener("click", function () {
              openToDoModal(taskId);
          });
          const deleteBtn = document.createElement("button");
          deleteBtn.innerHTML = `<img src="/images/bin.svg" alt="Delete" class="delete-icon">`;
          deleteBtn.classList.add("delete-task-btn");
          deleteBtn.setAttribute("data-task", taskId);
          deleteBtn.addEventListener("click", function () {
              deleteTask(taskId);
          });
          li.appendChild(checkboxLabel);
          li.appendChild(taskTitle);
          li.appendChild(showTaskBtn);
          li.appendChild(deleteBtn);
          taskList.appendChild(li);
      });
  }
  function addNewTask() {
      const taskId = "task" + Date.now();
      tasks[taskId] = { title: "New Task", category: "No Category", description: "Enter task details..." };
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskCreated = true; // Mark that a new task was created
      updateTaskList();
      openToDoModal(taskId);
  }
  function deleteTask(taskId) {
      delete tasks[taskId];
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateTaskList();
  }
  document.getElementById("todo-list").addEventListener("click", function(event) {
      if (event.target && event.target.matches(".checkbox-input")) {
        // Handle checkbox click
      }
      if (event.target && event.target.matches(".show-task-btn")) {
        // Handle show task button click
      }
    });
  document.getElementById("add-task-btn").addEventListener("click", addNewTask);
  document.querySelector(".save-btn").addEventListener("click", saveTask);
  document.querySelector(".close-icon").addEventListener("click", closeToDo);
  document.querySelector(".edit-icon").addEventListener("click", enableEditing);
  updateTaskList();
});