const detaljer = document.querySelector('#detaljer');
const listItems = document.querySelectorAll('li');

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}
// hjælpemetode til initItems() 
// #detaljer fra hbs filen får adresse 
async function showDetails(id) {
    const kunde = await get('/' + id);
    detaljer.innerHTML = `${kunde.adresse}`;
}
// eventhandler on click viser e.g adresse 2 for kunde 2
function initItems() {
    for (let item of listItems) {
        item.onclick = async () => {
            // console.log(item.id);
            await showDetails(item.id);
        }
    }
}

initItems();