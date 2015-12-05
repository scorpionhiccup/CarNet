var map, heatmap, carData, weatherData ;
var multipleMarkers = [];


function initMap() {
  // Multiple Markers
     var markers = [
         [40.12008951,-88.23704624],
         [40.125,-88.235]
     ];

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 40.12008951, lng: -88.23704624},
    mapTypeId: google.maps.MapTypeId.MAP
  });

  // Loop through our array of markers & place each one on the map
      for( i = 0; i < markers.length; i++ ) {
          var position = new google.maps.LatLng(markers[i][0], markers[i][1]);
          marker = new google.maps.Marker({
              position: position,
              map: map,
              icon: './images/car.png'
          });
          multipleMarkers.push(marker);
      }


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });

  // get car data every 10s
  carData = setInterval(getCarData, 800);


  // get weather data every 30 mins
  weatherData = setInterval(getWeatherData, 1000);


}

// get car data from kafka
function getCarData() {
  console.log("getting car data...");
  toggleMarkers();
}

// stop car and weather data from kafka
function stopData() {
  console.log("stopping data...")
  clearInterval(carData);
  clearInterval(weatherData);
}

// remove all markers
function setMapOnAll(map) {
  for (var i = 0; i < multipleMarkers.length; i++) {
    multipleMarkers[i].setMap(map);
  }
  // multipleMarkers.length = 0;
}

// Removes the markers from the map
function clearMarkers() {
  setMapOnAll(null);
}

// Removes the heatmap from the map
function clearHeatmap() {
  heatmap.setMap(null)
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function toggleMarkers() {
  for (var i = 0; i < multipleMarkers.length; i++) {
    multipleMarkers[i].setMap(multipleMarkers[i].getMap() ? null : map);
  }
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
  {location: new google.maps.LatLng(40.122, -88.247), weight: 24},
  new google.maps.LatLng(40.122, -88.245),
  {location: new google.maps.LatLng(40.122, -88.243), weight: 34},
  {location: new google.maps.LatLng(40.122, -88.241), weight: 38},
  {location: new google.maps.LatLng(40.122, -88.239), weight: 25},
  new google.maps.LatLng(40.122, -88.237),
  {location: new google.maps.LatLng(40.122, -88.235), weight: 24},

  {location: new google.maps.LatLng(40.125, -88.247), weight: 38},
  {location: new google.maps.LatLng(40.125, -88.245), weight: 25},
  new google.maps.LatLng(40.125, -88.243),
  {location: new google.maps.LatLng(40.125, -88.241), weight: 24},
  new google.maps.LatLng(40.125, -88.239),
  {location: new google.maps.LatLng(40.125, -88.237), weight: 34},
  {location: new google.maps.LatLng(40.125, -88.235), weight: 38}
  ];
}
