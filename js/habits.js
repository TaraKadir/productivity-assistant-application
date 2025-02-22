

const createHabitButton = document.getElementById('createHabitButton');
const addHabitContainer = document.getElementById('addHabitContainer');
createHabitButton.addEventListener('click', () =>{
    addHabitContainer.classList.toggle('hidden');
    createHabitButton.style.display = 'none';
});


