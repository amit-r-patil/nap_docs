



/**
* Adds markers to the map highlighting the locations of the captials of
* France, Italy, Germany, Spain and the United Kingdom.
*
* @param  {H.Map} map      A HERE Map instance within the application
*/
function addMarkersToMap(map) {

var locData = document.getElementsByClassName("td_locs_accident");

for (i=0; i<locData.length;i++){
  latLonText = locData[i].innerHTML
  latLonText = latLonText.replace("(","").replace(")","")
  latLonText = latLonText.split(",")
  lat = latLonText[0]
  lon = latLonText[1]

  var LocationOfMarker = { lat: lat, lng: lon };
  // Create a marker icon from an image URL:
  var icon = new H.map.Icon("https://cdn2.iconfinder.com/data/icons/insurance-83/64/ender-bender-insurance-transportation-accident-automobile-1024.png", { size: { w: 56, h: 56 } });

  // Create a marker using the previously instantiated icon:
  var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

  map.addObject(marker);

  //var parisMarker = new H.map.Marker({lat:lat, lng:lon});
  //map.addObject(parisMarker);
}


var locData = document.getElementsByClassName("td_locs_fire");

for (i=0; i<locData.length;i++){
  latLonText = locData[i].innerHTML
  latLonText = latLonText.replace("(","").replace(")","")
  latLonText = latLonText.split(",")
  lat = latLonText[0]
  lon = latLonText[1]

  var LocationOfMarker = { lat: lat, lng: lon };
  // Create a marker icon from an image URL:
  var icon = new H.map.Icon("https://cdn1.iconfinder.com/data/icons/natural-world/360/fire-flame_16-1024.png", { size: { w: 56, h: 56 } });

  // Create a marker using the previously instantiated icon:
  var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

  map.addObject(marker);

  //var parisMarker = new H.map.Marker({lat:lat, lng:lon});
  //map.addObject(parisMarker);
}


var locData = document.getElementsByClassName("td_locs_pothole");

for (i=0; i<locData.length;i++){
  latLonText = locData[i].innerHTML
  latLonText = latLonText.replace("(","").replace(")","")
  latLonText = latLonText.split(",")
  lat = latLonText[0]
  lon = latLonText[1]

  var LocationOfMarker = { lat: lat, lng: lon };
  // Create a marker icon from an image URL:
  var icon = new H.map.Icon("https://cdn4.iconfinder.com/data/icons/car-accident-2/512/pothole-road-hole-danger-street-accident-1024.png", { size: { w: 56, h: 56 } });

  // Create a marker using the previously instantiated icon:
  var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

  map.addObject(marker);

  //var parisMarker = new H.map.Marker({lat:lat, lng:lon});
  //map.addObject(parisMarker);
}


var locData = document.getElementsByClassName("td_locs_trash");

for (i=0; i<locData.length;i++){
  latLonText = locData[i].innerHTML
  latLonText = latLonText.replace("(","").replace(")","")
  latLonText = latLonText.split(",")
  lat = latLonText[0]
  lon = latLonText[1]

  var LocationOfMarker = { lat: lat, lng: lon };
  // Create a marker icon from an image URL:
  var icon = new H.map.Icon("https://cdn2.iconfinder.com/data/icons/pollution-14/340/garbage_trash_litter_pollution_dirty_junk_smell-256.png", { size: { w: 56, h: 56 } });

  // Create a marker using the previously instantiated icon:
  var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

  map.addObject(marker);

  //var parisMarker = new H.map.Marker({lat:lat, lng:lon});
  //map.addObject(parisMarker);
}


}

/**
* Boilerplate map initialization code starts below:
*/

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
defaultLayers.vector.normal.map,{
center: {lat:19.095212, lng:72.8728215},
zoom: 12,
pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
addMarkersToMap(map);
}

document.addEventListener('readystatechange', event => {

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        //alert("hi 1");
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    if (event.target.readyState === "complete") {
        //alert("hi 2");
    }
});
