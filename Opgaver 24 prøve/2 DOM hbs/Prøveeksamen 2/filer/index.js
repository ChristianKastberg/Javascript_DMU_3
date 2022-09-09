
async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}
// Handlebars.compile VIGTIG
async function generateList(numbers) {
    let template = await getText('/list.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({numbers});
}

// negative tal bliver røde
// fjerner tal man klikker på - tilføjer eventhandler til alle tal i listen
function initItems() {
    const listItems = document.querySelectorAll('li');
    for (let item of listItems) {
        if (parseInt(item.innerText) < 0)
        item.style.color = 'red';
        item.onclick = () => {
            // item.parentElement.removeChild(item);
            item.outerHTML = '';
            updateSum();
        }
    }
}

function updateSum() {
    let sum = 0;
    const listItems = document.querySelectorAll('li');
    for (let item of listItems) {
        sum += parseInt(item.innerText);
    }
    document.querySelector('#sum').innerHTML = sum;
}

async function main() {
    try {
        const numbers = [-8, 60, 7, -32, 45, -19];
        document.body.innerHTML = await generateList(numbers);
        initItems();
        updateSum();
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();