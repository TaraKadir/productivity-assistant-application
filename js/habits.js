

// // // const createHabitButton = document.getElementById('createHabitButton');
// // // const addHabitContainer = document.getElementById('addHabitContainer');
// // // createHabitButton.addEventListener('click', () =>{
// // //     addHabitContainer.classList.toggle('hidden');
// // //     createHabitButton.style.display = 'none';
// // // });

// // // KOD SOM SKA KOMMENTERATS UT 24 feb 22.43




// document.addEventListener("DOMContentLoaded", function(){
//     // const createHabitButton = document.getElementById("createHabitButton");
//     const habitPopup = document.getElementById("habit-popup"); //Ska vi ta bort denna knapp??
//     const ctaButton = document.querySelector(".cta-button");
//     // const closePopup = document.querySelector(".close"); //Min
//     const closePopup = document.querySelector(".close-icon"); //Utifrån Sams
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list")

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];

//     function openPopup(){
//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc(){
//         habitPopup.style.display = "none";
//     }

//     function saveHabit(){
    

//         const title = document.getElementById("habit-title").value;
//         const priority = document.getElementById("habit-priority").value;
//         const repetitions = document.getElementById("habit-repetition").value;
//         const category = document.getElementById("habit-category").value;

//         if (title.trim () === ""){
//             alert("Please enter a habit title!");
//             return;
//         }


//         const newHabit = {
//             id: Date.now(),
//             title, 
//             priority,
//             repetitions, 
//             category
//         };

//         habits.push(newHabit);
//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();

//     }

//     function renderHabits(){
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//             <h3>${habit.title}</h3> 
//             <p><strong></strong>${habit.priority}</p>
//             <p><strong>Priority:</strong>${habit.repetitions}</p>
//             <p><strong></strong>${habit.category}</p>
//             <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;
//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function() {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }
    
 
//     createHabitButton.addEventListener("click", openPopup); //Ska vi ta bort denna knapp??
//     ctaButton.addEventListener("click", openPopup);
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();


// });


// document.addEventListener('DOMContentLoaded', function () {
//     const editIcon = document.querySelector(".edit-icon"); // Edit-knappen
//     const saveButton = document.querySelector(".save-btn"); // Spara-knappen
//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let isEditing = false; 

//     // Ladda sparade värden vid start
//     function loadFormData() {
//         const savedData = JSON.parse(localStorage.getItem("habitData")) || {};
//         titleInput.value = savedData.title || "";
//         prioritySelect.value = savedData.priority || "";
//         repetitionsInput.value = savedData.repetitions || "";
//         categorySelect.value = savedData.category || "";
//     }

//     // Spara data till localStorage
//     function saveFormData() {
//         const habitData = {
//             title: titleInput.value,
//             priority: prioritySelect.value,
//             repetitions: repetitionsInput.value,
//             category: categorySelect.value
//         };
//         localStorage.setItem("habitData", JSON.stringify(habitData));
//     }

//     // Gör fälten redigerbara när man klickar på edit-ikonen
//     editIcon.addEventListener("click", function () {
//         if (!isEditing) {
//             titleInput.removeAttribute("disabled");
//             prioritySelect.removeAttribute("disabled");
//             repetitionsInput.removeAttribute("disabled");
//             categorySelect.removeAttribute("disabled");
//             isEditing = true;
//         }
//     });

//     // Spara värdena när man klickar på "Save"
//     saveButton.addEventListener("click", function () {
//         saveFormData();
//         titleInput.setAttribute("disabled", "true");
//         prioritySelect.setAttribute("disabled", "true");
//         repetitionsInput.setAttribute("disabled", "true");
//         categorySelect.setAttribute("disabled", "true");
//         isEditing = false;
//     });

//     // Ladda data vid start
//     loadFormData();
// });

// tillfällig kod 27 feb 01:48

// document.addEventListener("DOMContentLoaded", function(){
//     const habitPopup = document.getElementById("habit-popup"); 
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon"); 
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const editIcon = document.querySelector(".edit-icon"); 
//     const habitList = document.getElementById("habit-list");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let isEditing = false;

//     function openPopup(){
//         habitPopup.style.display = "flex";
//         loadFormData();
//     }

//     function closePopupFunc(){
//         habitPopup.style.display = "none";
//     }

//     function saveHabit(){
//         const title = titleInput.value;
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title.trim() === ""){
//             alert("Please enter a habit title!");
//             return;
//         }

//         const newHabit = {
//             id: Date.now(),
//             title, 
//             priority,
//             repetitions, 
//             category
//         };

//         habits.push(newHabit);
//         localStorage.setItem("habits", JSON.stringify(habits));
//         saveFormData();
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits(){
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//             <h3>${habit.title}</h3> 
//             <p><strong>Priority:</strong> ${habit.priority}</p>
//             <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//             <p><strong>Category:</strong> ${habit.category}</p>
//             <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;
//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function() {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     function loadFormData() {
//         const savedData = JSON.parse(localStorage.getItem("habitData")) || {};
//         titleInput.value = savedData.title || "";
//         prioritySelect.value = savedData.priority || "";
//         repetitionsInput.value = savedData.repetitions || "";
//         categorySelect.value = savedData.category || "";
//     }

//     function saveFormData() {
//         const habitData = {
//             title: titleInput.value,
//             priority: prioritySelect.value,
//             repetitions: repetitionsInput.value,
//             category: categorySelect.value
//         };
//         localStorage.setItem("habitData", JSON.stringify(habitData));
//     }

//     editIcon.addEventListener("click", function () {
//         if (!isEditing) {
//             titleInput.removeAttribute("disabled");
//             prioritySelect.removeAttribute("disabled");
//             repetitionsInput.removeAttribute("disabled");
//             categorySelect.removeAttribute("disabled");
//             isEditing = true;
//         }
//     });

//     saveButton.addEventListener("click", function () {
//         saveFormData();
//         titleInput.setAttribute("disabled", "true");
//         prioritySelect.setAttribute("disabled", "true");
//         repetitionsInput.setAttribute("disabled", "true");
//         categorySelect.setAttribute("disabled", "true");
//         isEditing = false;
//     });

//     ctaButton.addEventListener("click", openPopup);
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });


// Tillfällig kod 27 feb 02:12:

// MAsas som inte funkar, den över är bättre: 
// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let editingHabitId = null;

//     function openPopup() {
//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         habitPopup.style.display = "none";
//         resetForm();
//     }

//     function resetForm() {
//         titleInput.value = "";
//         prioritySelect.value = "";
//         repetitionsInput.value = "";
//         categorySelect.value = "";
//         editingHabitId = null;
//     }

//     function addHabit() {
//         const title = titleInput.value;
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title.trim() === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         const newHabit = {
//             id: Date.now(),
//             title,
//             priority,
//             repetitions,
//             category
//         };

//         habits.push(newHabit);
//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         resetForm();
//     }

//     function renderHabits() {
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3>
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <button class="edit-btn" data-id="${habit.id}">Edit</button>
//                 <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 editHabit(habitId);
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 deleteHabit(habitId);
//             });
//         });
//     }

//     function editHabit(habitId) {
//         const habit = habits.find(h => h.id === habitId);
//         if (!habit) return;

//         titleInput.value = habit.title;
//         prioritySelect.value = habit.priority;
//         repetitionsInput.value = habit.repetitions;
//         categorySelect.value = habit.category;

//         editingHabitId = habitId;
//         openPopup();
//     }

//     function saveHabit() {
//         if (editingHabitId) {
//             habits = habits.map(habit =>
//                 habit.id === editingHabitId
//                     ? {
//                           ...habit,
//                           title: titleInput.value,
//                           priority: prioritySelect.value,
//                           repetitions: repetitionsInput.value,
//                           category: categorySelect.value
//                       }
//                     : habit
//             );

//             localStorage.setItem("habits", JSON.stringify(habits));
//             renderHabits();
//             closePopupFunc();
//         }
//     }

//     function deleteHabit(habitId) {
//         habits = habits.filter(habit => habit.id !== habitId);
//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//     }

//     ctaButton.addEventListener("click", addHabit);
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });

// BRA MEN UTAN EDIT : 

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup"); 
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon"); 
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         if (habit) {
//             // Öppna popupen med data från det kort man vill redigera
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             // Öppna popupen för att skapa ett nytt kort
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }

//         // Gör alla fält redigerbara direkt när popupen öppnas
//         titleInput.removeAttribute("disabled");
//         prioritySelect.removeAttribute("disabled");
//         repetitionsInput.removeAttribute("disabled");
//         categorySelect.removeAttribute("disabled");

//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             // Uppdatera befintligt kort
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { id: currentEditingHabitId, title, priority, repetitions, category };
//             }
//         } else {
//             // Skapa nytt kort
//             const newHabit = {
//                 id: Date.now(),
//                 title, 
//                 priority,
//                 repetitions, 
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits() {
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <span class="edit-icon" data-id="${habit.id}">&#9998;</span>
//                 <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit);
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     ctaButton.addEventListener("click", () => openPopup());
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });

// BRA MEN KORTET SAKNAS 27 feb 02.47

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         if (habit) {
//             // Ladda in data från kortet i popupen
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             // Rensa fälten om vi skapar ett nytt kort
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }

//         // Se till att fälten är redigerbara
//         titleInput.removeAttribute("disabled");
//         prioritySelect.removeAttribute("disabled");
//         repetitionsInput.removeAttribute("disabled");
//         categorySelect.removeAttribute("disabled");

//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             // Uppdatera ett befintligt kort
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { id: currentEditingHabitId, title, priority, repetitions, category };
//             }
//         } else {
//             // Skapa ett nytt kort
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }
//     // HÅLLER PÅ HÄR MED SPAN/EDIT ICON
//     function renderHabits() {
//         // habitList.innerHTML = "";
//         habitList.innerHTML = `   <span class="edit-icon" title="Edit habit">&#9998;</span>`;

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `                
//                 <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>

//                 <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit); // Öppna popupen med befintliga värden för redigering
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     ctaButton.addEventListener("click", () => openPopup());
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });

// NÄST NäST SISTA INNAN SOV: 

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         if (habit) {
//             // Ladda in data från kortet i popupen
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             // Rensa fälten om vi skapar ett nytt kort
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }

//         // Se till att fälten är redigerbara
//         titleInput.removeAttribute("disabled");
//         prioritySelect.removeAttribute("disabled");
//         repetitionsInput.removeAttribute("disabled");
//         categorySelect.removeAttribute("disabled");

//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             // Uppdatera ett befintligt kort
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { id: currentEditingHabitId, title, priority, repetitions, category };
//             }
//         } else {
//             // Skapa ett nytt kort
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits() {
//         habitList.innerHTML = ""; // Rensar listan innan vi lägger till korten på nytt

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <div class="habit-actions">
//                     <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
//                     <button class="delete-btn" data-id="${habit.id}">Delete</button>
//                 </div>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit); // Öppna popupen med befintliga värden för redigering
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     ctaButton.addEventListener("click", () => openPopup());
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });

// // Näst sista innan läggdags
// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");
//     const overlay = document.getElementById("overlay"); // Lägg till en overlay

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         document.body.classList.add("editing-mode"); // Lägg till overlay-effekt

//         if (habit) {
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }

//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         document.body.classList.remove("editing-mode"); // Ta bort overlay-effekten
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { id: currentEditingHabitId, title, priority, repetitions, category };
//             }
//         } else {
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits() {
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <div class="habit-actions">
//                     <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
//                     <button class="delete-btn" data-id="${habit.id}">Delete</button>
//                 </div>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit);
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     ctaButton.addEventListener("click", () => openPopup());
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);

//     renderHabits();
// });


// HÄNDER INGET NÄR JAG TRYCKER CTA: 

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");
//     const overlay = document.getElementById("overlay");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         document.body.classList.add("editing-mode"); // Lägg till overlay-effekt

//         if (habit) {
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }

//         habitPopup.style.display = "flex";
//     }

//     function closePopupFunc() {
//         document.body.classList.remove("editing-mode"); // Ta bort overlay-effekten
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { id: currentEditingHabitId, title, priority, repetitions, category };
//             }
//         } else {
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits() {
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <div class="habit-actions">
//                     <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
//                     <button class="delete-btn" data-id="${habit.id}">Delete</button>
//                 </div>
//             `;

//             habitList.appendChild(habitCard);
//         });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit);
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     // Öppna popup när "Add Habit"-knappen klickas
//     ctaButton.addEventListener("click", () => openPopup());
    
//     // Stäng popup vid klick på stäng-knappen eller avbryt-knappen
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);

//     // Spara vanan
//     saveButton.addEventListener("click", saveHabit);

//     // Stäng popup om man klickar utanför den (på overlay)
//     overlay.addEventListener("click", closePopupFunc);

//     renderHabits();
// });

// KOD SOM FUNKAR YAAAY 27 feb 03.10

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");
//     const overlay = document.getElementById("overlay");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         document.body.classList.add("editing-mode");
//         habitPopup.style.display = "flex";

//         // **SÄKERSTÄLL ATT INPUT-FÄLTEN ÄR AKTIVA**
//         titleInput.removeAttribute("disabled");
//         prioritySelect.removeAttribute("disabled");
//         repetitionsInput.removeAttribute("disabled");
//         categorySelect.removeAttribute("disabled");

//         if (habit) {
//             // **Fyll i formuläret om vi redigerar en vana**
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             // **Töm formuläret om vi lägger till en ny vana**
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }
//     }

//     function closePopupFunc() {
//         document.body.classList.remove("editing-mode");
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             // Uppdatera befintlig vana
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { 
//                     id: currentEditingHabitId, 
//                     title, 
//                     priority, 
//                     repetitions, 
//                     category 
//                 };
//             }
//         } else {
//             // Skapa ny vana
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

    // function renderHabits() {
    //     habitList.innerHTML = "";

    //     habits.forEach(habit => {
    //         const habitCard = document.createElement("div");
    //         habitCard.classList.add("habit-card");

    //         habitCard.innerHTML = `
    //             <h3>${habit.title}</h3> 
    //             <p><strong>Priority:</strong> ${habit.priority}</p>
    //             <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
    //             <p><strong>Category:</strong> ${habit.category}</p>
    //             <div class="habit-actions">
    //                 <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
    //                 <button class="delete-btn" data-id="${habit.id}">Delete</button>
    //                  <img src="/images/bin-33x33-ny-27-feb.svg" alt="Delete" class="delete-icon">
    //             </div>
    //         `;

    //         habitList.appendChild(habitCard);
    //     });

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit);
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     // **Öppna popup för att lägga till ny vana**
//     ctaButton.addEventListener("click", () => openPopup(null));
    
//     // **Stäng popup vid klick på stäng-knappen eller avbryt-knappen**
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);

//     // **Spara vanan**
//     saveButton.addEventListener("click", saveHabit);

//     // **Stäng popup om man klickar utanför den (på overlay)**
//     overlay.addEventListener("click", closePopupFunc);

//     renderHabits();
// });





// SISTA FÖRSÖK INNNAN SOV 03,25

// document.addEventListener("DOMContentLoaded", function () {
//     const habitPopup = document.getElementById("habit-popup");
//     const ctaButton = document.querySelector(".cta-button");
//     const closePopup = document.querySelector(".close-icon");
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list");
//     const overlay = document.getElementById("overlay");

//     const titleInput = document.getElementById("habit-title");
//     const prioritySelect = document.getElementById("habit-priority");
//     const repetitionsInput = document.getElementById("habit-repetition");
//     const categorySelect = document.getElementById("habit-category");

//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     let currentEditingHabitId = null;

//     function openPopup(habit = null) {
//         document.body.classList.add("editing-mode");
//         habitPopup.style.display = "flex";

//         // **SÄKERSTÄLL ATT INPUT-FÄLTEN ÄR AKTIVA**
//         titleInput.removeAttribute("disabled");
//         prioritySelect.removeAttribute("disabled");
//         repetitionsInput.removeAttribute("disabled");
//         categorySelect.removeAttribute("disabled");

//         if (habit) {
//             // **Fyll i formuläret om vi redigerar en vana**
//             titleInput.value = habit.title;
//             prioritySelect.value = habit.priority;
//             repetitionsInput.value = habit.repetitions;
//             categorySelect.value = habit.category;
//             currentEditingHabitId = habit.id;
//         } else {
//             // **Töm formuläret om vi lägger till en ny vana**
//             titleInput.value = "";
//             prioritySelect.value = "";
//             repetitionsInput.value = "";
//             categorySelect.value = "";
//             currentEditingHabitId = null;
//         }
//     }

//     function closePopupFunc() {
//         document.body.classList.remove("editing-mode");
//         habitPopup.style.display = "none";
//     }

//     function saveHabit() {
//         const title = titleInput.value.trim();
//         const priority = prioritySelect.value;
//         const repetitions = repetitionsInput.value;
//         const category = categorySelect.value;

//         if (title === "") {
//             alert("Please enter a habit title!");
//             return;
//         }

//         if (currentEditingHabitId !== null) {
//             // Uppdatera befintlig vana
//             const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
//             if (habitIndex !== -1) {
//                 habits[habitIndex] = { 
//                     id: currentEditingHabitId, 
//                     title, 
//                     priority, 
//                     repetitions, 
//                     category 
//                 };
//             }
//         } else {
//             // Skapa ny vana
//             const newHabit = {
//                 id: Date.now(),
//                 title,
//                 priority,
//                 repetitions,
//                 category
//             };
//             habits.push(newHabit);
//         }

//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }

//     function renderHabits() {
//         habitList.innerHTML = "";

//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");

//             habitCard.innerHTML = `
//                 <h3>${habit.title}</h3> 
//                 <p><strong>Priority:</strong> ${habit.priority}</p>
//                 <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
//                 <p><strong>Category:</strong> ${habit.category}</p>
//                 <div class="habit-actions">
//                     <span class="edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
//                     <img src="/images/bin-33x33-ny-27-feb.svg" alt="Delete" class="delete-icon">

//                     <button class="delete-btn" data-id="${habit.id}">Delete</button>
//                 </div>
//             `;

//             habitList.appendChild(habitCard);
//         });


        

//         document.querySelectorAll(".edit-icon").forEach(editIcon => {
//             editIcon.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 const habit = habits.find(h => h.id === habitId);
//                 if (habit) {
//                     openPopup(habit);
//                 }
//             });
//         });

//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function () {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }

//     // **Öppna popup för att lägga till ny vana**
//     ctaButton.addEventListener("click", () => openPopup(null));
    
//     // **Stäng popup vid klick på stäng-knappen eller avbryt-knappen**
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);

//     // **Spara vanan**
//     saveButton.addEventListener("click", saveHabit);

//     // **Stäng popup om man klickar utanför den (på overlay)**
//     overlay.addEventListener("click", closePopupFunc);

//     renderHabits();
// });



// // DELETEKNAPP FIXA: 




// // // const createHabitButton = document.getElementById('createHabitButton');
// // // const addHabitContainer = document.getElementById('addHabitContainer');
// // // createHabitButton.addEventListener('click', () =>{
// // //     addHabitContainer.classList.toggle('hidden');
// // //     createHabitButton.style.display = 'none';
// // // });
// // // KOD SOM SKA KOMMENTERATS UT 24 feb 22.43
// document.addEventListener("DOMContentLoaded", function(){
//     // const createHabitButton = document.getElementById("createHabitButton");
//     const habitPopup = document.getElementById("habit-popup");
//     // const closePopup = document.querySelector(".close"); //Min
//     const closePopup = document.querySelector(".close-icon"); //Utifrån Sams
//     const cancelButton = document.getElementById("cancel-btn");
//     const saveButton = document.getElementById("save-btn");
//     const habitList = document.getElementById("habit-list")
//     let habits = JSON.parse(localStorage.getItem("habits")) || [];
//     function openPopup(){
//         habitPopup.style.display = "flex";
//     }
//     function closePopupFunc(){
//         habitPopup.style.display = "none";
//     }
//     function saveHabit(){
//         const title = document.getElementById("habit-title").value;
//         const priority = document.getElementById("habit-priority").value;
//         const repetitions = document.getElementById("habit-repetition").value;
//         const category = document.getElementById("habit-category").value;
//         if (title.trim () === ""){
//             alert("Please enter a habit title!");
//             return;
//         }
//         const newHabit = {
//             id: Date.now(),
//             title,
//             priority,
//             repetitions,
//             category
//         };
//         habits.push(newHabit);
//         localStorage.setItem("habits", JSON.stringify(habits));
//         renderHabits();
//         closePopupFunc();
//     }
//     function renderHabits(){
//         habitList.innerHTML = "";
//         habits.forEach(habit => {
//             const habitCard = document.createElement("div");
//             habitCard.classList.add("habit-card");
//             habitCard.innerHTML = `
//             <h3>${habit.title}</h3>
//             <p><strong></strong>${habit.priority}</p>
//             <p><strong>Priority:</strong>${habit.repetitions}</p>
//             <p><strong></strong>${habit.category}</p>
//             <button class="delete-btn" data-id="${habit.id}">Delete</button>
//             `;
//             habitList.appendChild(habitCard);
//         });
//         document.querySelectorAll(".delete-btn").forEach(btn => {
//             btn.addEventListener("click", function() {
//                 const habitId = parseInt(this.getAttribute("data-id"));
//                 habits = habits.filter(habit => habit.id !== habitId);
//                 localStorage.setItem("habits", JSON.stringify(habits));
//                 renderHabits();
//             });
//         });
//     }
//     createHabitButton.addEventListener("click", openPopup);
//     closePopup.addEventListener("click", closePopupFunc);
//     cancelButton.addEventListener("click", closePopupFunc);
//     saveButton.addEventListener("click", saveHabit);
//     renderHabits();
// });


// 27 feb 13.59

document.addEventListener("DOMContentLoaded", function () {
    const habitPopup = document.getElementById("habit-popup");
    const ctaButton = document.querySelector(".cta-button");
    const closePopup = document.querySelector(".close-icon");
    const cancelButton = document.getElementById("cancel-btn");
    const saveButton = document.getElementById("save-btn");
    // const deleteButton = document.getElementById("delete-btn"); //  ändrade från icon? 
        // const editButton = document.getElementById("edit-btn"); //  ändrade från icon? 
    // const deleteButton = document.createElement("delete-btn"); //  ändrade från icon? 
    // const editButton = document.createElement("edit-btn"); //  ändrade från icon? 
    const habitList = document.getElementById("habit-list");
    const overlay = document.getElementById("overlay");

    const titleInput = document.getElementById("habit-title");
    const prioritySelect = document.getElementById("habit-priority");
    const repetitionsInput = document.getElementById("habit-repetition");
    const categorySelect = document.getElementById("habit-category");

    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    let currentEditingHabitId = null;

    function openPopup(habit = null) {
        document.body.classList.add("editing-mode");
        habitPopup.style.display = "flex";

        // **SÄKERSTÄLL ATT INPUT-FÄLTEN ÄR AKTIVA**
        titleInput.removeAttribute("disabled");
        prioritySelect.removeAttribute("disabled");
        repetitionsInput.removeAttribute("disabled");
        categorySelect.removeAttribute("disabled");

        if (habit) {
            // **Fyll i formuläret om vi redigerar en vana**
            titleInput.value = habit.title;
            prioritySelect.value = habit.priority;
            repetitionsInput.value = habit.repetitions;
            categorySelect.value = habit.category;
            currentEditingHabitId = habit.id;
        } else {
            // **Töm formuläret om vi lägger till en ny vana**
            titleInput.value = "";
            prioritySelect.value = "";
            repetitionsInput.value = "";
            categorySelect.value = "";
            currentEditingHabitId = null;
        }
    }

    function closePopupFunc() {
        document.body.classList.remove("editing-mode");
        habitPopup.style.display = "none";
    }

    function saveHabit() {
        const title = titleInput.value.trim();
        const priority = prioritySelect.value;
        const repetitions = repetitionsInput.value;
        const category = categorySelect.value;

        if (title === "") {
            alert("Please enter a habit title!");
            return;
        }

        if (currentEditingHabitId !== null) {
            // Uppdatera befintlig vana
            const habitIndex = habits.findIndex(h => h.id === currentEditingHabitId);
            if (habitIndex !== -1) {
                habits[habitIndex] = { 
                    id: currentEditingHabitId, 
                    title, 
                    priority, 
                    repetitions, 
                    category 
                };
            }
        } else {
            // Skapa ny vana
            const newHabit = {
                id: Date.now(),
                title,
                priority,
                repetitions,
                category
            };
            habits.push(newHabit);
        }

        localStorage.setItem("habits", JSON.stringify(habits));
        renderHabits();
        closePopupFunc();
    }

    function renderHabits() {
        habitList.innerHTML = "";

        habits.forEach(habit => {
            const habitCard = document.createElement("div");
            habitCard.classList.add("habit-card");

            habitCard.innerHTML = `
                <h3>${habit.title}</h3> 
                <p><strong>Priority:</strong> ${habit.priority}</p>
                <p><strong>Repetitions:</strong> ${habit.repetitions}</p>
                <p><strong>Category:</strong> ${habit.category}</p>
                <div class="habit-actions">

                    <button class="edit-btn" data-id="${habit.id}"></button>
                    <button class="delete-btn" data-id="${habit.id}"></button>

               
                </div>`; 
                 
                // <span class="edit-btn" data-id="${habit.id}" <button class="edit-btn"><img src="/images/edit-button.svg" alt="edit" class="edit-svg"></span>
                    
                // <span class="delete-btn" data-id="${habit.id}"<button class="delete-btn"><img src="/images/delete-button.svg" alt="Delete" class="delete-svg"></button></span>

            
            // <button class="edit-btn" data-id="${habit.id}" <button class="edit-btn"></button>  
              //  <span class=".edit-icon" data-id="${habit.id}" title="Edit habit">&#9998;</span>
                // prova utan övre 

            // //  <button class="delete-icon" data-id="${habit.id}">"/images/home.svg"</button>
                    // hör till  <button class="delete-btn" data-id="${habit.id}">Delete</button> där <button class="delete-icon" data-id="${habit.id}">Delete</button> ligger
            habitList.appendChild(habitCard);
        });

        // document.querySelectorAll(".edit-icon").forEach(editIcon => {
        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const habitId = parseInt(this.getAttribute("data-id"));
                const habit = habits.find(h => h.id === habitId);
                if (habit) {
                    openPopup(habit);
                }
            });
        });

        // document.querySelectorAll(".delete-btn").forEach(btn => {
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const habitId = parseInt(this.getAttribute("data-id"));
                habits = habits.filter(habit => habit.id !== habitId);
                localStorage.setItem("habits", JSON.stringify(habits));
                renderHabits();
            });
        });
    }

    // **Öppna popup för att lägga till ny vana**
    ctaButton.addEventListener("click", () => openPopup(null));
    
    // **Stäng popup vid klick på stäng-knappen eller avbryt-knappen**
    closePopup.addEventListener("click", closePopupFunc);
    cancelButton.addEventListener("click", closePopupFunc);

    // **Spara vanan**
    saveButton.addEventListener("click", saveHabit);

    // **Stäng popup om man klickar utanför den (på overlay)**
    overlay.addEventListener("click", closePopupFunc);

    renderHabits();
});
// editButton.addEventListener("click");





