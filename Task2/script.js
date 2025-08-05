document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Add task on button click
    addTaskBtn.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
      }
    });
  
    // Add task on Enter key press
    taskInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  
    function addTask(text) {
      const li = document.createElement("li");
      li.className = "task-item";
  
      const span = document.createElement("span");
      span.textContent = text;
  
      // Toggle complete on text click
      span.addEventListener("click", function () {
        li.classList.toggle("completed");
      });
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.className = "remove-btn";
  
      removeBtn.addEventListener("click", function () {
        taskList.removeChild(li);
      });
  
      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
    }
  });
  