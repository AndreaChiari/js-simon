console.log('JS OK')

//prendo gli elementi di interesse dal DOM
const counterSeconds = document.getElementById('seconds')
const counterMinutes = document.getElementById('minutes')
const counterHours = document.getElementById('hours')
const counterDays = document.getElementById('days')

// stabilisco una variabile che mi faccia vedere la data del giorno di natale
let xmasDate = new Date('Dec 25 , 2022 00:00:00').getTime();
console.log(xmasDate);


function logTimeXmas() {
// stabilisco una variabile che mi faccia vedere la data del giorno di oggi
let currentDate = new Date().getTime();


// stabilisco una variabile che mi faccia vedere la differenza in millisecondi tra le due date
let timeDistance = xmasDate - currentDate


// trovo il valore esatto dei secondi, minuti, ore e giorni con dei calcoli

// GIORNI
let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
counterDays.innerText = days;

//ORE
let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
counterHours.innerText = hours;

//MINUTI
let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
counterMinutes.innerText = minutes;

//SECONDI
let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
counterSeconds.innerText = seconds;
}

// applico un countdown usando le timing functions
 
setInterval(logTimeXmas, 1000);


