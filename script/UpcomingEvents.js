  let currentDate = new Date(data.currentDate)
  currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset())
  /* console.log(currentDate) */

  let pastEvents = [];
  let upcomingEvents = [];

  data.events.forEach(event => {
    const eventDate = new Date(event.date);
  
    if (eventDate < currentDate) {
      pastEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
  });

  /* console.log(upcomingEvents); */

  const upcomingEventsContainer = document.getElementById("upcoming-events-container");
  const pastEventsContainer = document.getElementById("past-events-container");

  upcomingEvents.forEach(event => {
    const eventCardHtml = createEventCard(event);
      upcomingEventsContainer.innerHTML += eventCardHtml;
});

  function createEventCard(event) {
    return `
    <div class="col">
    <div class="card">
        <img src="${event.image}" class="card-img-top" alt="${event.name}" width="200">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Date:</strong> ${event.date}</li>
              <li class="list-group-item"><strong>Category:</strong> ${event.category}</li>
              <li class="list-group-item"><strong>Place:</strong> ${event.place}</li>
              <li class="list-group-item"><strong>Capacity:</strong> ${event.capacity}</li>
              <li class="list-group-item"><strong>Assistance:</strong> ${event.assistance}</li>
              <li class="list-group-item"><strong>Price:</strong> $${event.price}</li>
          </ul>
         </div>
      </div>
  </div>
    `;
  }

  /* Boton de busqueda */
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchEvents);

  function searchEvents() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const filteredEvents = upcomingEvents.filter(event => {
    return event.name.toLowerCase().includes(searchInput) ||
           event.description.toLowerCase().includes(searchInput) ||
           event.category.toLowerCase().includes(searchInput) ||
           event.place.toLowerCase().includes(searchInput);
  });

  upcomingEventsContainer.innerHTML = "";

  filteredEvents.forEach(event => {
    const eventCardHtml = createEventCard(event);
    upcomingEventsContainer.innerHTML += eventCardHtml;
  });
}
 
/* filtro */

const categoryFilter = document.querySelectorAll('#category-filter input[type="checkbox"]');

categoryFilter.forEach(function(checkbox) {
checkbox.addEventListener('change', updateFilter);
});

function updateFilter() {
  // obtiene las categorias
  const checkedCategories = Array.from(categoryFilter)
    .filter(function(checkbox) {
      return checkbox.checked;
    })
    .map(function(checkbox) {
      return checkbox.value;
    });

  // filtra el array por categoria
  let filteredEvents = [];
  if (checkedCategories.length === 0) {
    filteredEvents = data.events;
  } else {
    filteredEvents = data.events.filter(function(event) {
      return checkedCategories.includes(event.category);
    });
  }

  // muestra los eventos filtrados
  displayEvents(filteredEvents);
}


function displayEvents(events) {
const eventsContainer = document.getElementById("upcoming-events-container");
eventsContainer.innerHTML = "";
events.forEach(function(event) {
  // crea el evento
  const eventCard = `
  <div class="col">
    <div class="card">
        <img src="${event.image}" class="card-img-top" alt="${event.name}" width="200">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Date:</strong> ${event.date}</li>
              <li class="list-group-item"><strong>Category:</strong> ${event.category}</li>
              <li class="list-group-item"><strong>Place:</strong> ${event.place}</li>
              <li class="list-group-item"><strong>Capacity:</strong> ${event.capacity}</li>
              <li class="list-group-item"><strong>Assistance:</strong> ${event.assistance}</li>
              <li class="list-group-item"><strong>Price:</strong> $${event.price}</li>
          </ul>
        </div>
    </div>
  </div>
  `;
  // añade las cards
  eventsContainer.innerHTML += eventCard;
});
}