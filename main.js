
console.log("siema!")

const firstName="Konrad";
const age=31.5;

console.log(`nazywam się ${firstName} i mam ${age} lat(a)`)


const heading = document.querySelector('.main__heading--js');


heading.innerHTML = `Witaj <span>Drogi</span> Odwiedzający, mam na imię ${firstName} i mam ${age} lat(a)`

const emptyParagraph = document.querySelector('.learn-technique__description--js');

emptyParagraph.innerHTML = `w ćwiczeniu używamy metody inner.HTML i za jej pomocą możemy "wstrzyknąć"
zawartość do wybranego elemnentu - chyba się udało ;))`