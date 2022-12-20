console.log('JS OK')

//prendo gli elementi di interesse dal DOM
const counterSeconds = document.getElementById('seconds')
const counterMinutes = document.getElementById('minutes')
const counterHours = document.getElementById('hours')
const counterDays = document.getElementById('days')

// stabilisco una variabile che mi faccia vedere la data del giorno di natale
let xmasDate = new Date('Dec 25 , 2022 00:00:00').getTime();
console.log(xmasDate);

// stabilisco una variabile che mi faccia vedere la data del giorno di oggi
let currentDate = new Date().getTime();
console.log(currentDate);

// stabilisco una variabile che mi faccia vedere la differenza in millisecondi tra le due date
let timeDistance = xmasDate - currentDate
console.log(timeDistance)

// trovo il valore esatto dei secondi, minuti, ore e giorni con dei calcoli

let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
  console.log(days,hours,minutes,seconds);



