let latitude = 22.7868542, longitude = 88.3643296;

// Intializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoib3BoaWxpYSIsImEiOiJjbGc3Y3JwNGEwbHpwM2ZvOTJkcjI1ZHljIn0.SfMU6sv_x5r6hyHl7JPk6Q'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude,latitude],
    zoom:4
})

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#gate")
var img4 = document.querySelector("#lotus")
var img5 = document.querySelector("#victoria")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([72.8347, 18.9217])
.addTo(map);

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.2295, 28.6129])
.addTo(map);

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.2588,28.5535])
.addTo(map);

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3426, 22.5448])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);