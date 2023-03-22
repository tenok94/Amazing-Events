/* fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
        const searchParams = new URLSearchParams(window.location.search);
        const eventId = searchParams.get('id');
        const event = data.events.find(event => event.id === eventId);

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
                        <li class="list-group-item"><strong>Place:</strong> ${event.place}</li>
                        <li class="list-group-item"><strong>Capacity:</strong> ${event.capacity}</li>
                        <li class="list-group-item"><strong>Assistance:</strong> ${event.assistance}</li>
                        <li class="list-group-item"><strong>Price:</strong> $${event.price}</li>
                    </ul>
                    <button class="btn btn-primary" onclick="showEventDetails('${event.id}')">Ver detalles</button>
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
    })
.catch(error => console.error(error)); */