const numberOfRulete = Number(prompt("Prosim, vlozte cele cislo od 0 do 36. "));

console.log(numberOfRulete);

function isEven(num) {
    return num % 2 === 0;
}




if (isEven(numberOfRulete) === true) {
    if (numberOfRulete > 0 && numberOfRulete <= 10 || numberOfRulete >= 19 && numberOfRulete <= 28) {
        document.body.innerHTML += '<p> Toto sude cislo ma cernou barvu.</p>';
    } else if (numberOfRulete >= 11 && numberOfRulete <= 18 || numberOfRulete >= 28 && numberOfRulete <= 36) {
        document.body.innerHTML += '<p> Toto sude cislo ma cervenou barvu. </p>';
    } else if (numberOfRulete === 0) {
        document.body.innerHTML += '<p>Toto cislo je zelene a je to nula.</p>'
    } else if (numberOfRulete > 36) {
        document.body.innerHTML += '<p>Cislo je vyssi nez 36.</p>'
    }

} else if (isEven(numberOfRulete) === false) {
    if (numberOfRulete > 0 && numberOfRulete <= 10 || numberOfRulete >= 19 && numberOfRulete <= 28) {
        document.body.innerHTML += '<p> Toto liche cislo je cervene.</p>';
    } else if (numberOfRulete >= 11 && numberOfRulete <= 18 || numberOfRulete >= 28 && numberOfRulete <= 36) {
        document.body.innerHTML += '<p> Toto liche cislo je cerne.</p>';
    } else if (numberOfRulete > 36) {
        document.body.innerHTML += '<p>Cislo je vyssi nez 36.</p>'
    }
} else  {
    document.body.innerHTML += '<p>Something went wrong! </p>';
}




