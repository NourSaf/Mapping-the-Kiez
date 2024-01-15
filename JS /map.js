// Initialize the map
// document.addEventListener('DOMContentLoaded', function() {

var map = L.map('map').setView([52.489415, 13.392281], 16.4);

// Integrate Mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/nour-safadi/clrdolfht00ce01p409vphilw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ci1zYWZhZGkiLCJhIjoiY2xwNnh5d2FnMXhsaTJqcWs4ZHFqNXM4aiJ9.cdEJMpU6paLl1t4Lk79MvA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    minZoom:16,
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);


// Define locations 
var locations = [
    {
        name: "Marheineke Markthalle",
        coords: [52.48922871774201, 13.394424191124616],
        label: "Historical",
        imageUrl: "../Materials /images/Marheineke-Markthalle_B-Kreuzberg_06-2017_img1.jpg" // Replace with actual image path
    },
    {
        name: "Passionskirche",
        coords: [52.48942454811764, 13.39713715986819],
        label: "Historical",
        imageUrl: "../Materials /images/Passionskirche.jpeg" // Replace with actual image path
    }
];

// Create circles and add click event
locations.forEach(function(location) {
    var circle = L.circle(location.coords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 15
    }).addTo(map);

    circle.on('click', function() {
        openLightbox(location);
    });
});

// Function to open lightbox
function openLightbox(location) {
    var lightbox = document.querySelector('.lightbox');
    var lightboxClose = document.querySelector('.lightboxClose');
    var lightboxContent = document.querySelector('.lightbox-content');

    
    
    lightboxContent.innerHTML = `

        <img class="lightbox-img" src="${location.imageUrl}" alt="${location.name}">
        <p class="lightboxText">${location.name} - ${location.label}</p>
    `;
    lightboxClose.innerHTML = `<button class="LightboxBtn" onclick="closeLightbox()">X</button>`;

    lightbox.style.display = 'block';
}

// Function to close lightbox
function closeLightbox() {
    document.querySelector('.lightbox').style.display = 'none';
}

// Assuming initialLat, initialLng, and initialZoom are your map's initial view settings
var initialLat =52.489415;
var initialLng = 13.392281;
var initialZoom = 16.4;


function resetMapView() {
    map.setView([initialLat, initialLng], initialZoom);
}

// Attach event listener to the button
document.getElementById('resetMapView').addEventListener('click', resetMapView);
