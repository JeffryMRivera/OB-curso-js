let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.1499994,
        lng: 23.83333,
      },
      map,
      title: "Alonissos",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 62.453972,
        lng: -114.371788,
      },
      map,
      title: "Yellowknife",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 15.414999,
        lng: -61.370976,
      },
      map,
      title: "Dominica",
    })
  );
}
