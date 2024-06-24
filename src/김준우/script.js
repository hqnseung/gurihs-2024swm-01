const ACCESS_TOKEN = 'pk.eyJ1IjoiaHFuc2V1bmciLCJhIjoiY2x4c2RyemgxMTYwNjJpb2hnNm93bmw2eCJ9.kbLiP4EqYqSgL9H-pd5-mw';

mapboxgl.accessToken = ACCESS_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-73.99209, 40.68933],
    zoom: 8.8
})

const searchJS = document.getElementById('search-js');
searchJS.onload = function () {
    const searchBox = new MapboxSearchBox();
    searchBox.accessToken = ACCESS_TOKEN;
    searchBox.marker = true;
    searchBox.mapboxgl = mapboxgl;
    map.addControl(searchBox);
};