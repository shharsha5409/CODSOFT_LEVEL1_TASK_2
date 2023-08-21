document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const clearButton = document.getElementById("clearButton");
  
    addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <input type="checkbox">
          <span class="task-text">${taskText}</span>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      const targetElement = event.target;
      if (targetElement.tagName === "BUTTON") {
        const listItem = targetElement.parentElement;
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "#888";
        targetElement.remove();
      }
    });
  
    clearButton.addEventListener("click", function() {
      const taskItems = taskList.querySelectorAll("li");
      taskItems.forEach((item) => item.remove());
    });
  });
  