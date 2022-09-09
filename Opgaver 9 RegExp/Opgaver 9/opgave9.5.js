// opgave9.5.js
// check om 2 passwords er ens og mindsts 8 tegn 
const elements = document.querySelectorAll('input,button,div');
elements[2].onclick = () => {
    if (elements[0].value !== elements[1].value)
        elements[3].innerHTML = 'Passwords er ikke ens!';
    else if (/^.{8,}$/.test(elements[0].value))  
    // {8,} 8 eller flere cifre i passworded chekker ikke for andet  {1,3} 1-3 cifre 
        elements[3].innerHTML = 'Password er ok!';
    else
        elements[3].innerHTML = 'Passwords er på mindre end 8 tegn!';
}