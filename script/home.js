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
  </div>
  `;
}
const eventsContainer = document.getElementById('events-container');
  data.events.forEach(event => {
    const eventCardHtml = createEventCard(event);
      eventsContainer.innerHTML += eventCardHtml;
});

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
const eventsContainer = document.getElementById("events-container");
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

/* Boton para buscar */
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
const searchTerm = document.getElementById("search-input").value.toLowerCase();
const filteredEvents = data.events.filter(function(event) {
  return event.name.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm);
});
displayEvents(filteredEvents);
});

function showEventDetails(button) {
const eventId = button.getAttribute('data-id');
window.location.href = `Details.html?id=${eventId}`;
}







