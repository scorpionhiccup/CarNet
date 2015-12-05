// get car data from kafka
function getCarData() {
  // console.log("getting car data...");
  clearMarkers();
  displayMarkers();
  console.log(multipleMarkers.length);
}

// remove all markers
function setMapOnAll(map) {
  for (var i = 0; i < multipleMarkers.length; i++) {
    multipleMarkers[i].setMap(map);
  }
  multipleMarkers.length = 0;
}

// Removes the markers from the map
function clearMarkers() {
  setMapOnAll(null);
}

function toggleMarkers() {
  for (var i = 0; i < multipleMarkers.length; i++) {
    multipleMarkers[i].setMap(multipleMarkers[i].getMap() ? null : map);
  }
}
