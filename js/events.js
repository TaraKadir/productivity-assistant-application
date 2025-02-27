document.addEventListener("DOMContentLoaded", () => {
    setupFilterMenu();    // Hanterar filter-menyn
    setupSorting();       // Hanterar sortering av events
    setupEventPopup();    // Hanterar popup-fönstret
    setupSaveEvent();     // Hanterar sparande av events
});

let editingEvent = null; // Håller koll på vilket event som redigeras

// Funktionerna för att hantera filter-menyn
function setupFilterMenu() {
    const filterBtn = document.getElementById("filter-btn");
    const filterMenu = document.getElementById("filter-menu");
    const filterFinished = document.getElementById("filter-finished");
    const filterUpcoming = document.getElementById("filter-upcoming");
    const upcomingSection = document.getElementById("upcoming-section");
    const finishedSection = document.getElementById("finished-section");

    filterBtn.style.position = "relative";

    // Toggla filter-menyn
    filterBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        filterMenu.classList.toggle("show");
        filterBtn.classList.toggle("active");
    });

    // Klick utanför filter-menyn stänger den
    document.addEventListener("click", (event) => {
        if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
            filterMenu.classList.remove("show");
            filterBtn.classList.remove("active");
        }
    });

    // Filter-funktion för att visa/dölja events
    if (filterFinished && filterUpcoming) {
        filterFinished.addEventListener("change", function () {
            finishedSection.style.display = this.checked ? "block" : "none";
        });

        filterUpcoming.addEventListener("change", function () {
            upcomingSection.style.display = this.checked ? "block" : "none";
        });
    }
}

// Funktion för att hantera sortering av events
function setupSorting() {
    const sortBtn = document.getElementById("sort-btn");
    const eventsContainer = document.getElementById("events-container");
    const upcomingSection = document.getElementById("upcoming-section");
    const finishedSection = document.getElementById("finished-section");

    let isSortedAscending = true;
    sortBtn.addEventListener("click", () => {
        if (isSortedAscending) {
            eventsContainer.insertBefore(finishedSection, upcomingSection);
        } else {
            eventsContainer.insertBefore(upcomingSection, finishedSection);
        }
        isSortedAscending = !isSortedAscending;
    });
}

// Funktion för att hantera popup-fönstret
function setupEventPopup() {
    const eventPopup = document.getElementById("event-popup");
    const openPopupBtn = document.querySelector(".cta-button"); // Plus-knappen
    const closePopupBtn = document.querySelector(".event-close-popup");

    openPopupBtn.addEventListener("click", () => {
        editingEvent = null; // Nollställ redigering
        clearEventForm(); // Rensa fälten
        eventPopup.style.display = "flex";
    });

    closePopupBtn.addEventListener("click", () => {
        eventPopup.style.display = "none";
        clearEventForm(); // Rensa fälten vid stängning
    });

    // Klick utanför popupen stänger den
    window.addEventListener("click", (event) => {
        if (event.target === eventPopup) {
            eventPopup.style.display = "none";
            clearEventForm();
        }
    });
}

// Funktion för att spara ett event
function setupSaveEvent() {
    const saveEventBtn = document.getElementById("save-event-btn");
    const eventTitle = document.getElementById("event-title");
    const eventDescription = document.getElementById("event-description");
    const eventDate = document.getElementById("due-date");
    const upcomingEventsList = document.getElementById("upcoming-events");
    
    saveEventBtn.addEventListener("click", () => {
        const title = eventTitle.value.trim();
        const description = eventDescription.value.trim();
        const date = eventDate.value.trim();

        if (title === "" || date === "") {
            alert("Please enter a title and date for the event!");
            return;
        }

        if (editingEvent) {
            // Uppdatera befintligt event
            editingEvent.querySelector(".event-title").textContent = title;
            editingEvent.querySelector(".event-date").textContent = date;
            editingEvent.querySelector(".event-description").textContent = description;
            editingEvent = null; // Nollställ redigering
        } else {
            // Skapa nytt event-kort
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `
                <h3 class="event-title">${title}</h3>
                <p class="event-date">${date}</p>
                <p class="event-description">${description}</p>
                <button class="edit-event">✏️</button>
                <button class="delete-event">🗑</button>
            `;

            // Lägg till eventet i listan
            upcomingEventsList.appendChild(eventCard);

            // Lägg till redigering & radera-funktion
            eventCard.querySelector(".edit-event").addEventListener("click", () => openEditEvent(eventCard));
            eventCard.querySelector(".delete-event").addEventListener("click", () => eventCard.remove());
        }

        // Rensa fälten efter sparning
        clearEventForm();

        // Stäng popupen efter sparning
        document.getElementById("event-popup").style.display = "none";
    });
}

// Funktion för att öppna popupen och redigera ett event
function openEditEvent(eventCard) {
    editingEvent = eventCard; // Spara vilket event som redigeras

    document.getElementById("event-title").value = eventCard.querySelector(".event-title").textContent;
    document.getElementById("event-description").value = eventCard.querySelector(".event-description").textContent;
    document.getElementById("due-date").value = eventCard.querySelector(".event-date").textContent;

    document.getElementById("event-popup").style.display = "flex";
}

// Funktion för att rensa fälten i event-formuläret
function clearEventForm() {
    document.getElementById("event-title").value = "";
    document.getElementById("event-description").value = "";
    document.getElementById("due-date").value = "";
    editingEvent = null; // Nollställ redigering
}
