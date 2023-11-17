var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ANEM_1 = new ol.format.GeoJSON();
var features_ANEM_1 = format_ANEM_1.readFeatures(json_ANEM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEM_1.addFeatures(features_ANEM_1);
var lyr_ANEM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANEM_1, 
                style: style_ANEM_1,
                interactive: true,
    title: 'ANEM<br />\
    <img src="styles/legend/ANEM_1_0.png" /> PNN<br />\
    <img src="styles/legend/ANEM_1_1.png" /> Preservación<br />\
    <img src="styles/legend/ANEM_1_2.png" /> Producción<br />\
    <img src="styles/legend/ANEM_1_3.png" /> <br />'
        });
var lyr_BNB21_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "BNB21",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BNB21_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8271209.533473, 258741.584173, -8106277.082700, 406094.946987]
                            })
                        });
var format_Veredas_3 = new ol.format.GeoJSON();
var features_Veredas_3 = format_Veredas_3.readFeatures(json_Veredas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veredas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veredas_3.addFeatures(features_Veredas_3);
var lyr_Veredas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veredas_3, 
                style: style_Veredas_3,
                interactive: true,
                title: '<img src="styles/legend/Veredas_3.png" /> Veredas'
            });
var format_RUNAP_4 = new ol.format.GeoJSON();
var features_RUNAP_4 = format_RUNAP_4.readFeatures(json_RUNAP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUNAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUNAP_4.addFeatures(features_RUNAP_4);
var lyr_RUNAP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUNAP_4, 
                style: style_RUNAP_4,
                interactive: true,
                title: '<img src="styles/legend/RUNAP_4.png" /> RUNAP'
            });
var format_Limite_Mcipal_5 = new ol.format.GeoJSON();
var features_Limite_Mcipal_5 = format_Limite_Mcipal_5.readFeatures(json_Limite_Mcipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Mcipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Mcipal_5.addFeatures(features_Limite_Mcipal_5);
var lyr_Limite_Mcipal_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Mcipal_5, 
                style: style_Limite_Mcipal_5,
                interactive: true,
                title: '<img src="styles/legend/Limite_Mcipal_5.png" /> Limite_Mcipal'
            });
var format_Fincas_6 = new ol.format.GeoJSON();
var features_Fincas_6 = format_Fincas_6.readFeatures(json_Fincas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fincas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fincas_6.addFeatures(features_Fincas_6);
var lyr_Fincas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fincas_6, 
                style: style_Fincas_6,
                interactive: true,
                title: '<img src="styles/legend/Fincas_6.png" /> Fincas'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ANEM_1.setVisible(true);lyr_BNB21_2.setVisible(true);lyr_Veredas_3.setVisible(true);lyr_RUNAP_4.setVisible(true);lyr_Limite_Mcipal_5.setVisible(true);lyr_Fincas_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ANEM_1,lyr_BNB21_2,lyr_Veredas_3,lyr_RUNAP_4,lyr_Limite_Mcipal_5,lyr_Fincas_6];
lyr_ANEM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DMI': 'DMI', 'Zona': 'Zona', 'Uso': 'Uso', });
lyr_Veredas_3.set('fieldAliases', {'nom_mpio': 'nom_mpio', 'nom_ver': 'nom_ver', });
lyr_RUNAP_4.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'territoria': 'territoria', 'resolucion': 'resolucion', 'escala': 'escala', 'organizaci': 'organizaci', 'url': 'url', });
lyr_Limite_Mcipal_5.set('fieldAliases', {'NOMBRE_ENT': 'NOMBRE_ENT', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Fincas_6.set('fieldAliases', {'Item': 'Item', 'Extensioni': 'Extensioni', 'Empresa': 'Empresa', 'Nombre y a': 'Nombre y a', 'Altitud': 'Altitud', 'Municipio': 'Municipio', 'Vereda': 'Vereda', 'Finca': 'Finca', '# de Anima': '# de Anima', 'area': 'area', });
lyr_ANEM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DMI': 'TextEdit', 'Zona': 'TextEdit', 'Uso': 'TextEdit', });
lyr_Veredas_3.set('fieldImages', {'nom_mpio': 'TextEdit', 'nom_ver': 'TextEdit', });
lyr_RUNAP_4.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'territoria': 'TextEdit', 'resolucion': 'TextEdit', 'escala': 'TextEdit', 'organizaci': 'TextEdit', 'url': 'TextEdit', });
lyr_Limite_Mcipal_5.set('fieldImages', {'NOMBRE_ENT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Fincas_6.set('fieldImages', {'Item': 'TextEdit', 'Extensioni': 'TextEdit', 'Empresa': 'TextEdit', 'Nombre y a': 'TextEdit', 'Altitud': 'TextEdit', 'Municipio': 'TextEdit', 'Vereda': 'TextEdit', 'Finca': 'TextEdit', '# de Anima': 'TextEdit', 'area': 'Range', });
lyr_ANEM_1.set('fieldLabels', {'OBJECTID': 'no label', 'DMI': 'header label', 'Zona': 'header label', 'Uso': 'no label', });
lyr_Veredas_3.set('fieldLabels', {'nom_mpio': 'no label', 'nom_ver': 'header label', });
lyr_RUNAP_4.set('fieldLabels', {'nombre': 'header label', 'categoria': 'header label', 'territoria': 'header label', 'resolucion': 'header label', 'escala': 'header label', 'organizaci': 'header label', 'url': 'header label', });
lyr_Limite_Mcipal_5.set('fieldLabels', {'NOMBRE_ENT': 'header label', 'DEPARTAMEN': 'no label', });
lyr_Fincas_6.set('fieldLabels', {'Item': 'header label', 'Extensioni': 'header label', 'Empresa': 'header label', 'Nombre y a': 'header label', 'Altitud': 'inline label', 'Municipio': 'header label', 'Vereda': 'header label', 'Finca': 'header label', '# de Anima': 'header label', 'area': 'header label', });
lyr_Fincas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});