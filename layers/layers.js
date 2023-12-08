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
var format_AMEM_1 = new ol.format.GeoJSON();
var features_AMEM_1 = format_AMEM_1.readFeatures(json_AMEM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMEM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMEM_1.addFeatures(features_AMEM_1);
var lyr_AMEM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMEM_1, 
                style: style_AMEM_1,
                interactive: true,
    title: 'AMEM<br />\
    <img src="styles/legend/AMEM_1_0.png" /> PNN<br />\
    <img src="styles/legend/AMEM_1_1.png" /> Preservación<br />\
    <img src="styles/legend/AMEM_1_2.png" /> Producción<br />\
    <img src="styles/legend/AMEM_1_3.png" /> <br />'
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
var lyr_BNB20_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "BNB20",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BNB20_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8271203.894613, 258773.002677, -8106385.504993, 406094.294411]
                            })
                        });
var lyr_BNB19_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "BNB19",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BNB19_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8271209.533373, 258741.585281, -8106277.082598, 406094.947895]
                            })
                        });
var format_Veredas_5 = new ol.format.GeoJSON();
var features_Veredas_5 = format_Veredas_5.readFeatures(json_Veredas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veredas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veredas_5.addFeatures(features_Veredas_5);
var lyr_Veredas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veredas_5, 
                style: style_Veredas_5,
                interactive: true,
                title: '<img src="styles/legend/Veredas_5.png" /> Veredas'
            });
var format_RUNAP_6 = new ol.format.GeoJSON();
var features_RUNAP_6 = format_RUNAP_6.readFeatures(json_RUNAP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUNAP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUNAP_6.addFeatures(features_RUNAP_6);
var lyr_RUNAP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUNAP_6, 
                style: style_RUNAP_6,
                interactive: true,
                title: '<img src="styles/legend/RUNAP_6.png" /> RUNAP'
            });
var format_Limite_Mcipal_7 = new ol.format.GeoJSON();
var features_Limite_Mcipal_7 = format_Limite_Mcipal_7.readFeatures(json_Limite_Mcipal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Mcipal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Mcipal_7.addFeatures(features_Limite_Mcipal_7);
var lyr_Limite_Mcipal_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Mcipal_7, 
                style: style_Limite_Mcipal_7,
                interactive: true,
                title: '<img src="styles/legend/Limite_Mcipal_7.png" /> Limite_Mcipal'
            });
var format_Catastro_1Km_8 = new ol.format.GeoJSON();
var features_Catastro_1Km_8 = format_Catastro_1Km_8.readFeatures(json_Catastro_1Km_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catastro_1Km_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastro_1Km_8.addFeatures(features_Catastro_1Km_8);
var lyr_Catastro_1Km_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catastro_1Km_8, 
                style: style_Catastro_1Km_8,
                interactive: true,
                title: '<img src="styles/legend/Catastro_1Km_8.png" /> Catastro_1Km'
            });
var format_Predios_Proyecto_9 = new ol.format.GeoJSON();
var features_Predios_Proyecto_9 = format_Predios_Proyecto_9.readFeatures(json_Predios_Proyecto_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_Proyecto_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_Proyecto_9.addFeatures(features_Predios_Proyecto_9);
var lyr_Predios_Proyecto_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_Proyecto_9, 
                style: style_Predios_Proyecto_9,
                interactive: true,
    title: 'Predios_Proyecto<br />\
    <img src="styles/legend/Predios_Proyecto_9_0.png" /> Diana Bautista<br />\
    <img src="styles/legend/Predios_Proyecto_9_1.png" /> Elizabeth Sanchez<br />\
    <img src="styles/legend/Predios_Proyecto_9_2.png" /> Jose Higuera<br />\
    <img src="styles/legend/Predios_Proyecto_9_3.png" /> Luis Fernando Ramon<br />\
    <img src="styles/legend/Predios_Proyecto_9_4.png" /> Maria Fernanda Sanchez<br />\
    <img src="styles/legend/Predios_Proyecto_9_5.png" /> William Qui�ones<br />\
    <img src="styles/legend/Predios_Proyecto_9_6.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_AMEM_1.setVisible(true);lyr_BNB21_2.setVisible(true);lyr_BNB20_3.setVisible(true);lyr_BNB19_4.setVisible(true);lyr_Veredas_5.setVisible(true);lyr_RUNAP_6.setVisible(true);lyr_Limite_Mcipal_7.setVisible(true);lyr_Catastro_1Km_8.setVisible(true);lyr_Predios_Proyecto_9.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AMEM_1,lyr_BNB21_2,lyr_BNB20_3,lyr_BNB19_4,lyr_Veredas_5,lyr_RUNAP_6,lyr_Limite_Mcipal_7,lyr_Catastro_1Km_8,lyr_Predios_Proyecto_9];
lyr_AMEM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DMI': 'DMI', 'Zona': 'Zona', 'Uso': 'Uso', });
lyr_Veredas_5.set('fieldAliases', {'nom_mpio': 'nom_mpio', 'nom_ver': 'nom_ver', });
lyr_RUNAP_6.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'territoria': 'territoria', 'resolucion': 'resolucion', 'escala': 'escala', 'organizaci': 'organizaci', 'url': 'url', });
lyr_Limite_Mcipal_7.set('fieldAliases', {'NOMBRE_ENT': 'NOMBRE_ENT', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Catastro_1Km_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'VEREDA_COD': 'VEREDA_COD', 'NUMERO_SUB': 'NUMERO_SUB', 'CODIGO_ANT': 'CODIGO_ANT', 'GLOBALID': 'GLOBALID', 'codigo_mun': 'codigo_mun', 'CODIGO_DEP': 'CODIGO_DEP', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_Predios_Proyecto_9.set('fieldAliases', {'C�digo F': 'C�digo F', 'Extensioni': 'Extensioni', 'Empresa': 'Empresa', 'Nombre y a': 'Nombre y a', 'Cedula': 'Cedula', 'Fecha de n': 'Fecha de n', 'Sexo': 'Sexo', 'Celular': 'Celular', 'Latitud (N': 'Latitud (N', 'Longitud (': 'Longitud (', 'Altitud': 'Altitud', 'Departamen': 'Departamen', 'Municipio': 'Municipio', 'Vereda': 'Vereda', 'Finca': 'Finca', 'Area finca': 'Area finca', '# de Anima': '# de Anima', '# de Hecta': '# de Hecta', '# Hectarea': '# Hectarea', 'Observacio': 'Observacio', 'layer': 'layer', 'path': 'path', });
lyr_AMEM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DMI': 'TextEdit', 'Zona': 'TextEdit', 'Uso': 'TextEdit', });
lyr_Veredas_5.set('fieldImages', {'nom_mpio': 'TextEdit', 'nom_ver': 'TextEdit', });
lyr_RUNAP_6.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'territoria': 'TextEdit', 'resolucion': 'TextEdit', 'escala': 'TextEdit', 'organizaci': 'TextEdit', 'url': 'TextEdit', });
lyr_Limite_Mcipal_7.set('fieldImages', {'NOMBRE_ENT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Catastro_1Km_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'VEREDA_COD': 'TextEdit', 'NUMERO_SUB': 'TextEdit', 'CODIGO_ANT': 'TextEdit', 'GLOBALID': 'TextEdit', 'codigo_mun': 'TextEdit', 'CODIGO_DEP': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Predios_Proyecto_9.set('fieldImages', {'C�digo F': 'TextEdit', 'Extensioni': 'TextEdit', 'Empresa': 'TextEdit', 'Nombre y a': 'TextEdit', 'Cedula': 'TextEdit', 'Fecha de n': 'TextEdit', 'Sexo': 'TextEdit', 'Celular': 'TextEdit', 'Latitud (N': 'TextEdit', 'Longitud (': 'TextEdit', 'Altitud': 'TextEdit', 'Departamen': 'TextEdit', 'Municipio': 'TextEdit', 'Vereda': 'TextEdit', 'Finca': 'TextEdit', 'Area finca': 'TextEdit', '# de Anima': 'TextEdit', '# de Hecta': 'TextEdit', '# Hectarea': 'TextEdit', 'Observacio': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AMEM_1.set('fieldLabels', {'OBJECTID': 'no label', 'DMI': 'header label', 'Zona': 'header label', 'Uso': 'no label', });
lyr_Veredas_5.set('fieldLabels', {'nom_mpio': 'no label', 'nom_ver': 'header label', });
lyr_RUNAP_6.set('fieldLabels', {'nombre': 'header label', 'categoria': 'header label', 'territoria': 'header label', 'resolucion': 'header label', 'escala': 'header label', 'organizaci': 'header label', 'url': 'header label', });
lyr_Limite_Mcipal_7.set('fieldLabels', {'NOMBRE_ENT': 'header label', 'DEPARTAMEN': 'no label', });
lyr_Catastro_1Km_8.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'VEREDA_COD': 'no label', 'NUMERO_SUB': 'no label', 'CODIGO_ANT': 'no label', 'GLOBALID': 'no label', 'codigo_mun': 'no label', 'CODIGO_DEP': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Predios_Proyecto_9.set('fieldLabels', {'C�digo F': 'inline label', 'Extensioni': 'header label', 'Empresa': 'header label', 'Nombre y a': 'header label', 'Cedula': 'header label', 'Fecha de n': 'header label', 'Sexo': 'header label', 'Celular': 'header label', 'Latitud (N': 'header label', 'Longitud (': 'header label', 'Altitud': 'header label', 'Departamen': 'header label', 'Municipio': 'header label', 'Vereda': 'header label', 'Finca': 'header label', 'Area finca': 'header label', '# de Anima': 'header label', '# de Hecta': 'header label', '# Hectarea': 'header label', 'Observacio': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Predios_Proyecto_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});