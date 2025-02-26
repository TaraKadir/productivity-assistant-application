document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("filter-btn");
    const filterMenu = document.getElementById("filter-menu");
    const sortBtn = document.getElementById("sort-btn");
    const upcomingSection = document.getElementById("upcoming-section");
    const finishedSection = document.getElementById("finished-section");
    const eventsContainer = document.getElementById("events-container");

    // Menyn placeras rätt
    filterBtn.style.position = "relative";

    // Toggla filter-menyn
    filterBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Förhindra att klicket stänger menyn direkt
        filterMenu.classList.toggle("show");
        filterBtn.classList.toggle("active");
    });

    // Klick utanför filter-menyn stänger den
    document.addEventListener("click", (event) => {
    
        if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
            console.log("Stänger filter-menyn");
            filterMenu.classList.remove("show");
            filterBtn.classList.remove("active");
        }
    }, true);

    // Sorteringsfunktion (Byter plats på Upcoming & Finished)
    let isSortedAscending = true;
    sortBtn.addEventListener("click", () => {
        if (isSortedAscending) {
            eventsContainer.insertBefore(finishedSection, upcomingSection);
        } else {
            eventsContainer.insertBefore(upcomingSection, finishedSection);
        }
        isSortedAscending = !isSortedAscending;
    });

    // Filter-funktion för att visa/dölja events
    const filterFinished = document.getElementById("filter-finished");
    const filterUpcoming = document.getElementById("filter-upcoming");

    if (filterFinished && filterUpcoming) {
        filterFinished.addEventListener("change", function () {
            finishedSection.style.display = this.checked ? "block" : "none";
        });

        filterUpcoming.addEventListener("change", function () {
            upcomingSection.style.display = this.checked ? "block" : "none";
        });
    }
});
