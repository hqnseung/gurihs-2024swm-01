const apiKey = 'pNVQAtGUWqyxAOBAkoaArvY98Xqf8cA5';
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const eventsContainer = document.getElementById('events');
        
        data._embedded.events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event-container');
                

            eventElement.innerHTML = `
                <div class="event-content">
                    <h2 class="event-title">${event.name}</h2>
                    <p class="event-date">${event.dates.start.localDate} ${event.dates.start.localTime}</p>
                    <a href="${event.url}" class="event-link" target="_blank">자세히 보기</a>
                </div>
            `;

            eventsContainer.appendChild(eventElement);
        });
    })
    .catch(error => {
        console.error('Error fetching the events:', error);
    });