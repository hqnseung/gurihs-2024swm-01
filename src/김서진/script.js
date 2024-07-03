const apiKey = 'HpCKvPzPtWffxA8sAcjqrTh2pnbfEA4J';
const country = 'KR';
const year = 2024;
const apiUrl = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${country}&year=${year}`;
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const holidays = data.response.holidays;
        const tableBody = document.getElementById('holiday-table-body');
        holidays.forEach(holiday => {
            if (holiday.primary_type === 'Public Holiday') {
                const row = document.createElement('tr');
                const dateCell = document.createElement('td');
                dateCell.textContent = holiday.date.iso;
                row.appendChild(dateCell);
                const nameCell = document.createElement('td');
                nameCell.textContent = holiday.name;
                row.appendChild(nameCell);
                const descriptionCell = document.createElement('td');
                descriptionCell.textContent = holiday.description;
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));