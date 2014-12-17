var map;

function initialize() {
	var mapOptions = {
    	zoom: 14
  	};

	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

	  // Try HTML5 geolocation
  	if(navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
      	var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      		map.setCenter(pos);
    	}, function() {
      handleNoGeolocation(map);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(map);
  }
}

function handleNoGeolocation(map) {
  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105)
  };
  map.setCenter(options.position);
}


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;