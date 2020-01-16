var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(45.151927, 26.817708), zoom: 16});

  var iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';


  var icons = {
    parking: {
      icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    },
	//statie: {
	//	icon: 
	
  };

/* trebuie asta singura
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
*/
  var features = [
    {
      position: new google.maps.LatLng(45.151960, 26.818134),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.916988, 151.233640),
      type: 'info'
    },{
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: 'library'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}