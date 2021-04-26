
console.log("siema!")

const firstName="Konrad";
const age=32;

console.log(`nazywam się ${firstName} i mam ${age} lat(a)`)


const heading = document.querySelector('.main__heading--js');


heading.innerHTML = `Witaj <span>Drogi</span> Odwiedzający, mam na imię ${firstName} i mam ${age} lat(a)`

const emptyParagraph = document.querySelector('.learn-technique__description--js');

emptyParagraph.innerHTML = `w ćwiczeniu używamy metody inner.HTML i za jej pomocą możemy "wstrzyknąć"
zawartość do wybranego elemnentu - chyba się udało ;))`

function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    myNumber = myNumber*7;
    return myNumber;
}

const myResult = calculate(age);

console.log(age);

console.log(myResult);
console.log(age);



function greet(age, firstName) {
    console.log(`Witaj Drogi Odwiedzający, mam na imię ${firstName} i mam ${age} lat(a)`);

}

greet(age, firstName);

greet(18, 'Jacek');

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.learn-technique__title--js', 'Zmieniony Nagłówek !');
createContent('.learn-technique__descriptionParagraph--js', 'tutaj zmieniam zawartość paragrafu ;) hehhe...');


const greetNew = (age, firstName) => {
    console.log(
        `Witaj Drogi Odwiedzający, mam na imię ${firstName} i mam ${age} lat(a)`
        );

}
greetNew(3,'Milena');
