
const display02 = document.querySelector('.display2')
const display01 = document.querySelector('.display1')
const ac = document.querySelector('.ac')
const del = document.querySelector('.del')
const uguale = document.querySelector('.uguale')
const numeri = document.querySelectorAll('.numeri')
const operazioni = document.querySelectorAll('.operazioni')

// aggiungere un listener ai numeri con evento che targhetti il text content
// creare delle varibilie per i numeri e gli operatori
// creare una funzione per i numeri che associ i numeri con una varibile
// mandare a schermo la variabile
// creare lo stesso listener per le operazioni
// creare una funzione per le operazioni e associarlo alla variabile
// mostrare sui display le cifre e le operazioni sul display
// creare un listener per il tasto = che mandi a una funzione calcola
// creare una funzione calcola e rendiamo le varibili dei numeri al posto delle stringhe
// creare una varibile per lo switch e mettiamo operations come parametro
// creare lo switch case con i vari operatori
// mostra la computazione sul display

let primaCifra = ''
let secondaCifra = ''
let operations = ''


// prendo tutti i numeri, ci metto un listener sull'evento
// creo un metodo che taghetti il textContent
numeri.forEach(button => button.addEventListener('click', (event) => {
  clickNumbers(event.target.textContent)
}))

// creo la funzione del metodo con parametro button
// inserisco i numeri digitati nella variabile
// mostro sul display la varibile con all'interno le cifre
function clickNumbers(button) {
  if (button === '.' && primaCifra.includes('.')) return // da spiegare meglio
  primaCifra += button
  display01.textContent = primaCifra
}

// prendo tutte le operazioni, ci metto un listener sull'evento
// creo una funzione che taghetti il textContent
operazioni.forEach(button => button.addEventListener('click', (event) => {
  clickOperation(event.target.textContent)
}))

// associo il l'operatore button alla variabile operations
// associo il numero selezionato nella primaCifra alla secondaCifra
// mostro sul display2 la seconda cifra e l'operatore selezionato
// pulisco il display1 e la varibile primaCifra rendendole stringhe vuote
function clickOperation(button) {
  if (button === '+' && display02.textContent.includes('+')) return
  if (button === '-' && display02.textContent.includes('-')) return
  if (button === '*' && display02.textContent.includes('*')) return
  if (button === '÷' && display02.textContent.includes('÷')) return
  operations += button
  secondaCifra = primaCifra
  display02.textContent = secondaCifra + operations
  primaCifra = ''
  display01.textContent = ''
}

uguale.addEventListener('click', calcolaOperazioni)

// creo una variabile dove immagazzinare la prima e seconda cifra
// rendo primaCifra e SecondaCifra delle variabili di tipo Number al posto di Stringhe
// creo uno switch con parametro operators
// creo i vari switch case + - * / 
// mostro nel display1 la computazione
// pulisco le display2 primaCifra SecondaCifra e operations rendendole stringhe vuote

function calcolaOperazioni() {
  let computazione
  primaCifra = Number(primaCifra)
  secondaCifra = Number(secondaCifra)

  switch (operations) {
    case '+':
      computazione = secondaCifra + primaCifra
      break
    case '-':
      computazione = secondaCifra - primaCifra
      break
    case '*':
      computazione = secondaCifra * primaCifra
      break
    case '÷':
      computazione = secondaCifra / primaCifra
      break
    default:
      return
  }

  display01.textContent = computazione
  display02.textContent = ''
  if(secondaCifra / 0) {
    display02.textContent = 'Bravo, hai'
    display01.textContent = 'fatto i Danni'
  }
  primaCifra = ''
  secondaCifra = ''
  operations = ''
}

ac.addEventListener('click', (event) => {
  acFunction()
})

// rendo variabili e display strighe vuote per pulire o resettare tutti i settings
function acFunction() {
  display01.textContent = ''
  display02.textContent = ''
  primaCifra = ''
  secondaCifra = ''
  operations = ''
}

del.addEventListener('click', (event) => {
  delFunction()
})

// uso slice per rimuovere l'ultimo numero selezionato
// aggiorno il display con il numero cancellato
function delFunction() {
  primaCifra = primaCifra.slice(0, -1)
  display01.textContent = primaCifra
}