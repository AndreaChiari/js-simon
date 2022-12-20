console.log('JS OK')

//prendo gli elementi di interesse dal DOM
const counterSeconds = document.getElementById('seconds')
const counterMinutes = document.getElementById('minutes')
const counterHours = document.getElementById('hours')
const counterDays = document.getElementById('days')

// stabilisco una variabile che mi faccia vedere la data del giorno di natale
let xmasDate = new Date('Dec 25 , 2022 00:00:00').getTime();
console.log(xmasDate)
