/**
 * Created by Victor Torres on 01/08/2016.
 */
(function (app, leaflet) {
  app.MyMap = ng.core.Component({
    selector: 'my-map',
    template: `
      <style>
        .map {
          height: 500px;
        }
      </style>
      <div class="map" id="mymap"></div>
    `
  }).Class({
    constructor: function () {},
    ngAfterViewInit: function () {
      var mymap = leaflet.map('mymap').setView([20.67649, -103.33929], 10);
      leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(mymap);
      var wms = L.tileLayer.wms("http://192.168.15.21:8080/geoserver/wms", {
        layers: 'imeplan:Colonia',
        format: 'image/png',
        transparent: true,
        version: '1.3.0'
      });
      wms.addTo(mymap);
      var rwms = L.tileLayer.wms("http://192.168.15.21:8080/geoserver/wms", {
        layers: 'imeplan:Municipios',
        format: 'image/png',
        transparent: true,
        version: '1.3.0'
      });
      rwms.addTo(mymap);
    }
  })
})(window.app || (window.app = {}), window.L);