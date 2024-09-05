
//leaflet map

var map = L.map('map').setView([0.3059, 32.5910], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    maxZoom: 19,
    attribution: '&copy: <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);