// Funkar 19.07 22feb
// const createHabitButton = document.getElementById('createHabitButton');
// const addHabitContainer = document.getElementById('addHabitContainer');
// createHabitButton.addEventListener('click', () =>{
//     addHabitContainer.classList.toggle('hidden');
//     createHabitButton.style.display = 'none';
// });


// // Nytt:

// document.addEventListener("DOMContentLoaded", function () {
//     const decrementBtn = document.querySelector(".decrement");
//     const incrementBtn = document.querySelector(".increment");
//     const repeatInput = document.getElementById("repeat");

//     decrementBtn.addEventListener("click", function () {
//       let value = parseInt(repeatInput.value);
//       if (value > 0) {
//         repeatInput.value = value - 1;
//       }
//     });

//     incrementBtn.addEventListener("click", function () {
//       let value = parseInt(repeatInput.value);
//       repeatInput.value = value + 1;
//     });
//   });


// nytt test layout 19.07 22 feb

// document.addEventListener("DOMContentLoaded", () => {
//   const createHabitButton = document.getElementById('createHabitButton');
//   const addHabitContainer = document.getElementById('addHabitContainer');
//   const habitForm = document.getElementById('habitForm');
//   const cancelHabitBtn = document.getElementById('cancel-habit-btn');
//   const addHabitButton = document.getElementById('add-habit-button');
//   const dateElement = document.querySelector('.date');

//   // Visa dagens datum
//   const updateDate = () => {
//     const today = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     dateElement.textContent = today.toLocaleDateString('sv-SE', options);
//   };

//   updateDate(); // Uppdaterar datum när sidan laddas

//   // När användaren klickar på knappen för att skapa en ny vana
//   createHabitButton.addEventListener('click', () => {
//     addHabitContainer.classList.remove('hidden');
//   });

//   // När användaren klickar på "Cancel" knappen
//   cancelHabitBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Förhindrar form submission
//     addHabitContainer.classList.add('hidden');
//   });

//   // Lägg till vana när formuläret skickas
//   habitForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Förhindrar form submission och reload

//     const title = document.getElementById('title').value;
//     const priority = document.getElementById('priority').value;
//     const repeat = document.getElementById('repeat').value;
//     const category = document.getElementById('category').value;

//     if (title && priority !== "empty" && category !== "empty") {
//       // Visa en success message (kan implementera ytterligare logik här för att lägga till vanan på en lista)
//       alert(`Habit Added: ${title}, Priority: ${priority}, Repeat: ${repeat}, Category: ${category}`);

//       // Stäng formuläret
//       addHabitContainer.classList.add('hidden');
//       habitForm.reset(); // Återställ formuläret
//     } else {
//       alert("Please fill out all required fields!");
//     }
//   });
// });


// Nytt test 21.00 22 feb

// JS - Habit Creation Modal
document.addEventListener('DOMContentLoaded', () => {
  const createHabitButton = document.getElementById('createHabitButton');
  const addHabitContainer = document.getElementById('addHabitContainer');
  const cancelHabitButton = document.getElementById('cancel-habit-btn');
  const habitForm = document.getElementById('habitForm');

  // Toggle visibility of the habit creation form
  createHabitButton.addEventListener('click', () => {
    addHabitContainer.classList.remove('hidden');
  });

  // Close the habit creation form when "Cancel" is clicked
  cancelHabitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addHabitContainer.classList.add('hidden');
  });

  // Handle form submission
  habitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., saving the habit data)
    console.log('Habit created!');
    addHabitContainer.classList.add('hidden');  // Hide the form after submission
  });
});
