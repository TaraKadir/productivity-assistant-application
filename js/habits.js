

// // const createHabitButton = document.getElementById('createHabitButton');
// // const addHabitContainer = document.getElementById('addHabitContainer');
// // createHabitButton.addEventListener('click', () =>{
// //     addHabitContainer.classList.toggle('hidden');
// //     createHabitButton.style.display = 'none';
// // });

// // KOD SOM SKA KOMMENTERATS UT 24 feb 22.43

document.addEventListener("DOMContentLoaded", function(){
    // const createHabitButton = document.getElementById("createHabitButton");
    const habitPopup = document.getElementById("habit-popup");
    // const closePopup = document.querySelector(".close"); //Min
    const closePopup = document.querySelector(".close-icon"); //Utifrån Sams
    const cancelButton = document.getElementById("cancel-btn");
    const saveButton = document.getElementById("save-btn");
    const habitList = document.getElementById("habit-list")

    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    function openPopup(){
        habitPopup.style.display = "flex";
    }

    function closePopupFunc(){
        habitPopup.style.display = "none";
    }

    function saveHabit(){
    

        const title = document.getElementById("habit-title").value;
        const priority = document.getElementById("habit-priority").value;
        const repetitions = document.getElementById("habit-repetition").value;
        const category = document.getElementById("habit-category").value;

        if (title.trim () === ""){
            alert("Please enter a habit title!");
            return;
        }


        const newHabit = {
            id: Date.now(),
            title, 
            priority,
            repetitions, 
            category
        };

        habits.push(newHabit);
        localStorage.setItem("habits", JSON.stringify(habits));
        renderHabits();
        closePopupFunc();

    }

    function renderHabits(){
        habitList.innerHTML = "";

        habits.forEach(habit => {
            const habitCard = document.createElement("div");
            habitCard.classList.add("habit-card");

            habitCard.innerHTML = `
            <h3>${habit.title}</h3> 
            <p><strong></strong>${habit.priority}</p>
            <p><strong>Priority:</strong>${habit.repetitions}</p>
            <p><strong></strong>${habit.category}</p>
            <button class="delete-btn" data-id="${habit.id}">Delete</button>
            `;
            habitList.appendChild(habitCard);
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const habitId = parseInt(this.getAttribute("data-id"));
                habits = habits.filter(habit => habit.id !== habitId);
                localStorage.setItem("habits", JSON.stringify(habits));
                renderHabits();
            });
        });
    }
    
 
    createHabitButton.addEventListener("click", openPopup);
    closePopup.addEventListener("click", closePopupFunc);
    cancelButton.addEventListener("click", closePopupFunc);
    saveButton.addEventListener("click", saveHabit);

    renderHabits();


});


