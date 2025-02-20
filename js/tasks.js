document.addEventListener('DOMContentLoaded', function () {
    function createToDo(id) {
        let todoNode = document.querySelector(id);
        let overlay = todoNode.querySelector(".overlay");
        let closeIcon = todoNode.querySelector(".close-icon");

        function openToDo() {
            todoNode.classList.add("todo-active");  // Add todo-active class
        }

        function closeTodo() {
            todoNode.classList.remove("todo-active");  // Remove todo-active class
        }

        overlay.addEventListener("click", closeTodo);
        closeIcon.addEventListener("click", closeTodo);
        return openToDo;
    }

    let todo = createToDo("#todo");
    document.querySelector("#open-todo").addEventListener("click", todo);

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
