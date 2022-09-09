// opgave14.1.js
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

mongoose.connect('mongodb://localhost/earthquakeDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const earthquakeSchema = new mongoose.Schema({
    sted: String,
    styrke: Number,
    tidspunkt: Number,
    koordinater: [Number]
});

const Earthquake = mongoose.model('Earthquake', earthquakeSchema);

async function addEarthquakes() {
    let maxQuake = await Earthquake.findOne().sort('-tidspunkt').exec();
    let maxTidspunkt = maxQuake ? maxQuake.tidspunkt : 0;
    console.log(maxTidspunkt, '\n-------------');
    let earthquakes = await get(earthquakeUrl);
    for (let feature of earthquakes.features) {
        if (feature.properties.time > maxTidspunkt) {
            console.log(feature.properties.time);
            await Earthquake.create({
                sted: feature.properties.place,
                styrke: feature.properties.mag,
                tidspunkt: feature.properties.time,
                koordinater: feature.geometry.coordinates
            });
        } else return;
    }
}

async function udskriv() {
    console.log(await Earthquake.findOne().sort('-styrke').exec());
    let steder = await Earthquake.find().distinct('sted').exec();
    console.log(steder.sort());
}

async function main() {
    try {
        await addEarthquakes()
        await udskriv();
    } catch (e) {
        console.log(e);
    }
    process.exit();
}
main();