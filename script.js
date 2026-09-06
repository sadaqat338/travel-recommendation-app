const travelData = {
    countries: [
        { 
            name: "Australia", 
            cities: [
                { name: "Sydney, Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500", description: "A vibrant city known for the Sydney Opera House." },
                { name: "Melbourne, Australia", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=500", description: "Famous for its cultural diversity and coffee culture." }
            ] 
        },
        { 
            name: "Japan", 
            cities: [
                { name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500", description: "Known for modern skyscrapers and historic temples." },
                { name: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500", description: "Famous for classical Buddhist temples and gardens." }
            ] 
        }
    ],
    beaches: [
        { name: "Bora Bora, French Polynesia", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", description: "Famous for turquoise waters and luxury resorts." },
        { name: "Miami Beach, USA", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500", description: "Known for its world-wide beaches, nightlife and climate." }
    ],
    temples: [
        { name: "Angkor Wat, Cambodia", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500", description: "A famous ancient temple complex in Cambodia." },
        { name: "Taj Mahal, India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500", description: "An iconic marble mausoleum and historical landmark." }
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