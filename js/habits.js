
const createHabitButton = document.getElementById('createHabitButton');
const addHabitContainer = document.getElementById('addHabitContainer');
createHabitButton.addEventListener('click', () =>{
    addHabitContainer.classList.toggle('hidden');
    createHabitButton.style.display = 'none';
});


// Nytt: 

document.addEventListener("DOMContentLoaded", function () {
    const decrementBtn = document.querySelector(".decrement");
    const incrementBtn = document.querySelector(".increment");
    const repeatInput = document.getElementById("repeat");
  
    decrementBtn.addEventListener("click", function () {
      let value = parseInt(repeatInput.value);
      if (value > 0) {
        repeatInput.value = value - 1;
      }
    });
  
    incrementBtn.addEventListener("click", function () {
      let value = parseInt(repeatInput.value);
      repeatInput.value = value + 1;
    });
  });
  