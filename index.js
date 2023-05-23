document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("task-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

      // Get the input value
      var taskForm = document.getElementById("task-form");
      var taskInput = document.getElementById("new-task-input");
      var todoList = document.getElementById("todo-list");
      var taskText = taskInput.value;
  
      // Create a new list item
      var newTask = document.createElement("li");
      var newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      var newLabel = document.createElement("label");
      newLabel.textContent = taskText;
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      
      // Add event listener to remove button
      removeButton.addEventListener("click", function() {
        newTask.remove(); // Remove the list item
      });
  
      // Append the new elements to the list
      newTask.appendChild(newCheckbox);
      newTask.appendChild(newLabel);
      newTask.appendChild(removeButton);
      document.getElementById("todo-list").appendChild(newTask);
  
      // Clear the input field
      taskInput.value = "";
    });
    // Remove all input items
    document.getElementById("remove-all-button").addEventListener("click", function() {
        var todoList = document.getElementById("todo-list");
        while (todoList.firstChild) {
          todoList.firstChild.remove(); // Remove each list item
        }
      });
    });