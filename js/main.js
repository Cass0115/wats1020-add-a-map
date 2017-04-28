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


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

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

var mymap = L.map('mapid').setView([46.852, -121.76], 13);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
   maxZoom: 18,
   id: 'cass0115.71e60bd0',
   accessToken: 'pk.eyJ1IjoiY2FzczAxMTUiLCJhIjoiY2oxenhzZGM2MDIwZjMycW00cGs4eTh4ciJ9.MxFv9u_YRj4D4F9HfDJkKw'
}).addTo(mymap);
});
