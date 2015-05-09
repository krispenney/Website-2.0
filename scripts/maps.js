

//Load map, center on location
function initialize() {

  var latLng = new google.maps.LatLng(43.472286, -80.544858);

  var mapOptions = {
    center: latLng,
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var contentString = '<div id="content" class="mapContent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><b>Where is Kris?</b></h1>'+
        '<div id="bodyContent">'+
          "</br><p>Kris is currently completing his 2B term for his BBA/BCS Double Degree</br><!--<a href='#Crawford'>See More</a>--></p>" +
        '</div>'+
        '</div>';

  var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({//build marker
        position: latLng,
        map: map,
        title: 'Where is Kris?'
    });

    infowindow.open(map,marker);//open initially

    google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
    });

}
google.maps.event.addDomListener(window, 'load', initialize);
