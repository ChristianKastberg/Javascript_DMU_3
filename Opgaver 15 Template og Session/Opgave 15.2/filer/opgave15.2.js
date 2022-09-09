// opgave12.1.js
// hbs i browser
async function generateEarthquakeTable(earthquakes) {
    let template = await getText('/earthquakes.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ earthquakes });
}

function selectEarthquakes(earthquakes) {
    earthquakes.features
        .forEach((quake) => quake.properties.time = new Date(quake.properties.time).toLocaleString());
    return earthquakes.features
        .filter(quake => quake.properties.mag >= 5)
        .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);
}

async function main(earthquakeUrl) {
    let earthquakes;
    try {
        earthquakes = await get(earthquakeUrl);
    } catch (fejl) {
        console.log(fejl);
    }
    earthquakes = selectEarthquakes(earthquakes);
    document.body.innerHTML = await generateEarthquakeTable(earthquakes);
}
main('/earthquakes');