// returns promise for loading GeoJSON file and adding the Leaflet layer to the layers array
async function getGeojsonLayer(fileName, layers) {
    // loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
    return $.getJSON(fileName, (data) => {
        layers.push(data);
    })
}

async function getFeatureCollection() {
    return new Promise(resolve => {
        const layers = [];
        const promises = [];

        // get promises for each of the CA state senate districts
        for (let i = 1; i <= 40; i++) {
            const promise = getGeojsonLayer(`/ca_state_senate_districts/bp_california state senate district ${i}.geojson`, layers);
            promises.push(promise);
        }
        
        // create your own GeoJSON feature collection
        const featureCollection = {
            'type': 'FeatureCollection',
            'features': []
        };

        // after all GeoJSON files load, add them to group layer, add to map, and zoom to bounds
        Promise.all(promises).then( () => {
            // create feature for GeoJSON feature collection
            for (let i = 1; i <= 40; i++) {
                const feature = {
                    'type': 'Feature',
                    'geometry': layers[i-1],
                    'properties': {
                        'name': `District ${i}`
                    }
                };

                featureCollection.features.push(feature);
            }

            resolve(featureCollection);
        });
    })
}
