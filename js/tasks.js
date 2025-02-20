document.addEventListener('DOMContentLoaded', function () {
    // Create modal display function
    function openToDoModal(taskId) {
        let todoNode = document.querySelector("#todo");
        let overlay = todoNode.querySelector(".overlay");
        let closeIcon = todoNode.querySelector(".close-icon");

        // Show modal
        todoNode.classList.add("todo-active");

        // Get modal content and update based on the clicked task
        const title = todoNode.querySelector("h1");
        const description = todoNode.querySelector("p");

        if (taskId === "task1") {
            title.textContent = "Task 1 Title";
            description.textContent = "This is a description for task 1.";
        } else if (taskId === "task2") {
            title.textContent = "Task 2 Title";
            description.textContent = "This is a description for task 2.";
        } else if (taskId === "task3") {
            title.textContent = "Task 3 Title";
            description.textContent = "This is a description for task 3.";
        }

        // Event listener for closing the modal
        function closeToDo() {
            todoNode.classList.remove("todo-active");
        }

        overlay.addEventListener("click", closeToDo);
        closeIcon.addEventListener("click", closeToDo);
    }

    // Add event listener to each "Show Task Card" button
    const taskButtons = document.querySelectorAll('.show-task-btn');
    taskButtons.forEach(button => {
        button.addEventListener('click', function () {
            const taskId = button.getAttribute('data-task');  // Get the task ID from data-task attribute
            openToDoModal(taskId);  // Call modal open function
        });
    });

    // Single pen icon to edit the content of the card
    const editIcon = document.querySelector('.edit-icon');
    const saveBtn = document.querySelector('.save-btn');  // Get the save button

    // Toggle contenteditable for clicked elements
    document.querySelectorAll('h1, h2, p').forEach(element => {
        element.addEventListener('click', function () {
            if (!element.hasAttribute('contenteditable')) {
                element.setAttribute('contenteditable', 'true');
                editIcon.style.color = '#e85d04'; // Change icon color when editing
                element.focus();  // Focus on the element for direct editing
            }
        });
    });

    // Save button functionality
    saveBtn.addEventListener('click', function () {
        // Get all editable elements
        const editableElements = document.querySelectorAll('[contenteditable="true"]');

        // Loop through each editable element and remove contenteditable
        editableElements.forEach(element => {
            element.removeAttribute('contenteditable');
        });

        // Optionally, change the icon color back to the normal state after saving
        editIcon.style.color = '#3284ed';  // Reset the edit icon color
    });
});
