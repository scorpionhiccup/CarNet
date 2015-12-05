var map, heatmap, carData, weatherData ;
var multipleMarkers = [];
var markers = [
    [40.12008951,-88.23704624],
    [40.125,-88.235]
];

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 40.12008951, lng: -88.23704624},
    mapTypeId: google.maps.MapTypeId.MAP
  });

  displayMarkers();

  displayHeatmap();

  // get car data every 10s
  carData = setInterval(getCarData, 10000);
  // get weather data every 30 mins
  weatherData = setInterval(getWeatherData, 1800000);


}

function displayMarkers(){
  // Loop through our array of markers & place each one on the map
      for( i = 0; i < markers.length; i++ ) {
          var position = new google.maps.LatLng(markers[i][0], markers[i][1]);
          marker = new google.maps.Marker({
              position: position,
              map: map,
              icon: '../static/images/car.png'
          });
          multipleMarkers.push(marker);
      }
};

function displayHeatmap(){
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
};

// stop car and weather data from kafka
function stopData() {
  console.log("stopping data...")
  clearInterval(carData);
  clearInterval(weatherData);
}
