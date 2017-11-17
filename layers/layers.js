var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Airports_0 = new ol.format.GeoJSON();
var features_Airports_0 = format_Airports_0.readFeatures(json_Airports_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airports_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Airports_0.addFeatures(features_Airports_0);var lyr_Airports_0 = new ol.layer.Vector({
                source:jsonSource_Airports_0, 
                style: style_Airports_0,
    title: 'Airports<br />\
    <img src="styles/legend/Airports_0_0.png" /> major<br />\
    <img src="styles/legend/Airports_0_1.png" /> mid<br />\
    <img src="styles/legend/Airports_0_2.png" /> small<br />'
        });

lyr_Airports_0.setVisible(true);
var layersList = [baseLayer,lyr_Airports_0];
lyr_Airports_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'Type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'IATA Code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'Type': 'Type', });
lyr_Airports_0.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'WebView', 'natlscale': 'Hidden', 'Type': 'TextEdit', });
lyr_Airports_0.set('fieldLabels', {'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'Type': 'no label', });
lyr_Airports_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Airports_0.on("postcompose", update);

    var listenerKey = lyr_Airports_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });