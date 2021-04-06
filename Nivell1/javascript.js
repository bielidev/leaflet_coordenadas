let mymap = L.map('mapid').setView([41.3870194, 2.1678584], 15);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  }
).addTo(mymap);

const estiloPopup = { maxWidth: '300' };

const IconoBase = L.Icon.extend({
  options: {
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  },
});

const iconoAzul = new IconoBase({ iconUrl: './img/marcador.png' });

L.marker([41.386995, 2.1638504], { icon: iconoAzul })
  .bindPopup(
    `<h1>Restaurant Centfocs</h1>
    <p>
      Restaurante mediterráneo
      </br>
      Carrer de Balmes, 16,08007 Barcelona
    </p>`,
    estiloPopup
  )
  .addTo(mymap);
