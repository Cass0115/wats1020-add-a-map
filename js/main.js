/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:



$(document).ready(function(){

// carousel
$('.carousel').carousel({
  interval: 3500
});

// tabs
$('#tab-buttons a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


// maps
var longmire   = L.marker([46.75, -121.81]).bindPopup('Longmire'),
    paradise   = L.marker([46.78, -121.73]).bindPopup('Paradise'),
    skyscraper = L.marker([46.92, -121.69]).bindPopup('Skyscraper Mountain');

var locations = L.layerGroup([longmire, paradise, skyscraper]);


var land  = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            {id:'cass0115.71e60bd0', accessToken: 'pk.eyJ1IjoiY2FzczAxMTUiLCJhIjoiY2oxenhzZGM2MDIwZjMycW00cGs4eTh4ciJ9.MxFv9u_YRj4D4F9HfDJkKw', attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'}),
    roads = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            {id:'cass0115.3c3f4102', accessToken: 'pk.eyJ1IjoiY2FzczAxMTUiLCJhIjoiY2oxenhzZGM2MDIwZjMycW00cGs4eTh4ciJ9.MxFv9u_YRj4D4F9HfDJkKw', attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'});
var mymap = L.map('mapid', {
    center: [46.852, -121.76],
    zoom: 10,
    layers: [land, roads]
});
 var baseMaps = {
   "land": land,
   "roads": roads
 }

var overlayMaps = {
  "locations":locations
}

L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var baseMaps = {
  "<span style ='color: gray'>land</span>":land,
  "roads": roads

};
// var mymap = L.map('mapid').setView([46.852, -121.76], 10);


// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 18,
//    id: 'cass0115.71e60bd0',
//    accessToken: 'pk.eyJ1IjoiY2FzczAxMTUiLCJhIjoiY2oxenhzZGM2MDIwZjMycW00cGs4eTh4ciJ9.MxFv9u_YRj4D4F9HfDJkKw'
// }).addTo(mymap);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 18,
//    id: 'cass0115.3c3f4102',
//    accessToken: 'pk.eyJ1IjoiY2FzczAxMTUiLCJhIjoiY2oxenhzZGM2MDIwZjMycW00cGs4eTh4ciJ9.MxFv9u_YRj4D4F9HfDJkKw'
// }).addTo(mymap);


// var marker = L.marker([46.75, -121.81]).addTo(mymap);
// marker.bindPopup("Longmire").openPopup();
// var marker = L.marker([46.78, -121.73]).addTo(mymap);
// marker.bindPopup("Paradise").openPopup();
// var marker = L.marker([46.92, -121.69]).addTo(mymap);
// marker.bindPopup("Skyscraper Mountain").openPopup();
});
