// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

    // Tag udgangspunkt i opgave12.1.html, opgave12.1.css og opgave12.1.js  . 
    // Åben earthquakeUrl’en i en browser og undersøg den hentede JSON.
    // Lav dernæst en webside, der viser en tabel over den sidst uges jordskælv 
    // med en styrke på mindst 5.
    // Tabellen skal vise styrke, sted og tidspunkt for hvert jordskælv – sorteret efter styrke.
    // 
    async function get(url) {
        const respons = await fetch(url);
        if (respons.status !== 200) // OK
            throw new Error(respons.status);
        return await respons.json(); 
    }
    async function main(earthquakeUrl) {
        try {
            let features = await get(earthquakeUrl);
            console.log(features);
        } catch (fejl) {
            console.log(fejl);
        }
    }
    // some changes nessecary 
    function generateUserTable(users) {
        let html = '<table>';
        for (user of users) {
            html += '<tr><td>' + user.id +
                '</td><td>' + user.name +
                '</td><td>' + user.company.name +
                '</td></tr>\n';
        }
        html += '</table><br><div></div>';
        return html;
    }
    
    main(earthquakeUrl);
    
    get(earthquakeUrl)
    .then(Feature => console.log(Feature))
    .catch(fejl => console.log(fejl));

   