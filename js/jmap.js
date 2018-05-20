function initMap(lat, lng, idmap) {
	var m = "#"+idmap;
	
	
	
	var myLatLng = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById(idmap), {
          zoom: 15,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });
	
};

	




