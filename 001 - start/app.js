// Objeto Date JD
const diaHoy = new Date();

let mes = diaHoy.getMonth(); // init 0 - 11
let dia = diaHoy.getDate();
let año = diaHoy.getFullYear();
let minuto = diaHoy.getMinutes();
let hour = diaHoy.getHours();
let segundo = diaHoy.getTime(); // Milisegundos desde 1978

año = diaHoy.setFullYear(2016);
año = diaHoy.getFullYear();

console.log(año);