var wms_layers = [];


        var lyr_OSMDefault_0 = new ol.layer.Tile({
            'title': 'OSM Default',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOUNDARY_1 = new ol.format.GeoJSON();
var features_BOUNDARY_1 = format_BOUNDARY_1.readFeatures(json_BOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1.addFeatures(features_BOUNDARY_1);
var lyr_BOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_1, 
                style: style_BOUNDARY_1,
                popuplayertitle: "BOUNDARY",
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_1.png" /> BOUNDARY'
            });
var format_ATTRACTIVENESSHOTSPOT_2 = new ol.format.GeoJSON();
var features_ATTRACTIVENESSHOTSPOT_2 = format_ATTRACTIVENESSHOTSPOT_2.readFeatures(json_ATTRACTIVENESSHOTSPOT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATTRACTIVENESSHOTSPOT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATTRACTIVENESSHOTSPOT_2.addFeatures(features_ATTRACTIVENESSHOTSPOT_2);
var lyr_ATTRACTIVENESSHOTSPOT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATTRACTIVENESSHOTSPOT_2, 
                style: style_ATTRACTIVENESSHOTSPOT_2,
                popuplayertitle: "ATTRACTIVENESS HOTSPOT",
                interactive: false,
    title: 'ATTRACTIVENESS HOTSPOT<br />\
    <img src="styles/legend/ATTRACTIVENESSHOTSPOT_2_0.png" /> -3.1 - -1.6<br />\
    <img src="styles/legend/ATTRACTIVENESSHOTSPOT_2_1.png" /> -1.6 - -0.2<br />\
    <img src="styles/legend/ATTRACTIVENESSHOTSPOT_2_2.png" /> -0.2 - 0.9<br />\
    <img src="styles/legend/ATTRACTIVENESSHOTSPOT_2_3.png" /> 0.9 - 2.1<br />\
    <img src="styles/legend/ATTRACTIVENESSHOTSPOT_2_4.png" /> 2.1 - 3.6<br />'
        });

lyr_OSMDefault_0.setVisible(true);lyr_BOUNDARY_1.setVisible(true);lyr_ATTRACTIVENESSHOTSPOT_2.setVisible(true);
var layersList = [lyr_OSMDefault_0,lyr_BOUNDARY_1,lyr_ATTRACTIVENESSHOTSPOT_2];
lyr_BOUNDARY_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'BLK_NM': 'BLK_NM', 'DIST_NAME': 'DIST_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ATTRACTIVENESSHOTSPOT_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_ID': 'SOURCE_ID', 'RANK': 'RANK', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', });
lyr_BOUNDARY_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'BLK_NM': 'TextEdit', 'DIST_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ATTRACTIVENESSHOTSPOT_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'RANK': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', });
lyr_BOUNDARY_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'BLK_NM': 'no label', 'DIST_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ATTRACTIVENESSHOTSPOT_2.set('fieldLabels', {'OBJECTID': 'no label', 'SOURCE_ID': 'no label', 'RANK': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', });
lyr_ATTRACTIVENESSHOTSPOT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});