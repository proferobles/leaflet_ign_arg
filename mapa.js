// Inicializar el mapa con una vista central (setview) y un zoom (3)
var map = L.map('map').setView([-53.7694843,-70.8032567], 3);

//Agregar mapa base de IGN
var ign_clasico = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
    minZoom: 3,
    maxZoom: 18
}).addTo(map);

// Agregar un segundo mapa base de IGN
var ign_gris = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
    minZoom: 3,
    maxZoom: 18
});

//Creamos un marcador
var marcador = L.marker ([-52.2052129,-60.2018886]);
//Agregamos popup al marcador
marcador.bindPopup("Las Malvinas e Islas de Atlantico Sur son argentinas").on('click');

// Anadir selector de mapas
var capasBase = {
    "Mapa gris": ign_gris,
    "Mapa clasico": ign_clasico
     };

// Añadir control de marcadores
var capas = {
    "Mostrar marcadores": marcador
};
//Agregar mapas y marcadores al mapa

var selectorCapas = L.control.layers(capasBase,capas,{ collapsed: false });
    selectorCapas.addTo(map);
