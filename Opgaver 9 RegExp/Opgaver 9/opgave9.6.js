// opgave9.6.js
const elements = document.querySelectorAll('input,button,div');
elements[2].onclick = () => {
    if (elements[0].value !== elements[1].value)
        elements[3].innerHTML = 'Passwords er ikke ens!';
    else if (/^(?=.*\d)(?=.*[a-zæøåA-ZÆØÅ])(?=.*[#%&*]).{8,}$/.test(elements[0].value))  
    // check at  password indeholder mindst et cifre, et dansk bogstav og et af specialtegnene #%& 
    // udbygget vers af 9.5 der kun chekkede om der var 8 eller flere cifre i passworded
        elements[3].innerHTML = 'Password er ok!';
    else
        elements[3].innerHTML = 'Password er ikke ok!';
}