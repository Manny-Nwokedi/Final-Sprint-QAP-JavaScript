document.addEventListener('DOMContentLoaded', () => {
    fetch('./Manny.json')
    .then(response => response.json())
    .then(data => {
        formatAndDisplayData(data);
    })
    .catch(error => console.error('Error reading the JSON file:', error));


    function formatLocation(record) {
    return `location: ${record.location}, location: ${record.location}`;
}

    function formatData(record, key) {
        return `${key}: ${record[key]}`;
    }
    function formatAndDisplayData(data) 
    {
        const displayElement = document.getElementById('dataDisplay');

        if (displayElement) {
            data.forEach(record => {
                const recordElement = document.createElement('p');
                const formattedData = [
                    formatData(record, 'Name'),
                    formatData(record, 'Age'),
                    formatData(record, 'Place of birth'),
                    formatData(record, 'Interest'),
                    formatData(record, 'Location'),
                    formatData(record, 'Sex')
                ].join(', ');

                recordElement.textContent = formattedData;
                displayElement.appendChild(recordElement);

                console.log(formattedData);
            });
        } else {
            console.error("The 'dataDisplay' element was not found.");
        }
    }
});
