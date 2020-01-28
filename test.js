var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
        {
          center: new google.maps.LatLng(45.151927, 26.817708), 
          zoom: 16,
          disableDefaultUI: true
        },
      );

  var iconURL= 'https://raw.githubusercontent.com/MihAi14/ProgramAutobuze/master/statie.png';

  var icons = {
	statie: {
      icon: iconURL
    },

  };

  var features = [
    {
      position: new google.maps.LatLng(45.151960, 26.818134),
      type: 'statie'
    }
  ];


//google.maps.event.addListener(marker, 'click', function(){ document.getElementById("home").src = 'sitetest.html'; });


  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}