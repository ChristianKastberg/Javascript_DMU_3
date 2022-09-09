// opgave12.1.js
// lmao jeg behøver ikke html og css skal bare have det over i min database
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/earthQuakeDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = new mongoose.Schema({
    Styrke: String,
    Sted: String,
    Tidspunkt : String,
    Kordinater: String
   // change later see what needs to be added 
});

const Eqmodel = mongoose.model('Eqmodel', Schema);

async function createEqModels(){
    for (let i = 1; i<6;i++){
        const emod = await Eqmodel.create({
            // temp fix later
            EarthQuakeScala:+i,
            location: i,
            time: i}) 
        };
        console.log(emod);
    }
async function main(){
    try{
        await createEqModels();
    } catch(e){
        console.log(e);
    }
    process.exit();
}
main();

function generateEarthquakeTable(earthquakes) {
    let html = '<table>';
    for (let quake of earthquakes) {
        let { time, place, mag } = quake.properties;
        html += '<tr><td>' + mag +
            '</td><td>' + place +
            '</td><td>' + new Date(time).toLocaleString() +
            '</td></tr>\n';
    }
    html += '</table><br><div></div>';
    return html;
}

function selectEarthquakes(earthquakes){
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
    document.body.innerHTML = generateEarthquakeTable(earthquakes);
}
main(earthquakeUrl);