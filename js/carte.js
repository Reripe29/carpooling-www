var map;

//var provider = new GeoSearch.OpenStreetMapProvider();

function initializeMap(latitude, longitude, zoom, zoom_min, zoom_max)
{
    map = L.map("map",
    {
        center: [ longitude, latitude ],
        zoom: zoom
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
        maxZoom: zoom_max,
        minZoom: zoom_min,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: window.env.LEAFLET_TOKEN
    }).addTo(map);
}