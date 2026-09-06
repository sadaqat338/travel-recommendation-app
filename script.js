const travelData = {
    countries: [
        { name: "Australia", cities: [{ name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500", description: "A vibrant city known for the Sydney Opera House." }] },
        { name: "Japan", cities: [{ name: "Tokyo", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500", description: "Known for modern skyscrapers and historic temples." }] }
    ],
    beaches: [
        { name: "Bora Bora", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", description: "Famous for turquoise waters and luxury resorts." }
    ],
    temples: [
        { name: "Angkor Wat", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500", description: "A famous ancient temple complex in Cambodia." }
    ]
};

document.getElementById('btnSearch').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (query.includes('beach')) {
        displayCards(travelData.beaches);
    } else if (query.includes('temple')) {
        displayCards(travelData.temples);
    } else if (query.includes('country') || query.includes('japan') || query.includes('australia')) {
        const cities = travelData.countries.flatMap(c => c.cities);
        displayCards(cities);
    } else {
        resultsDiv.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
    }
});

document.getElementById('btnClear').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});

function displayCards(items) {
    const resultsDiv = document.getElementById('results');
    items.forEach(item => {
        resultsDiv.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
    });
}