// Agregar a Local Storage
localStorage.setItem('nombre', 'Tony Manuel');
// localStorage.removeItem('nombre');
// localStorage.clear(); limpia toda la información
const nombre = localStorage.getItem('nombre');

// Session Storage
sessionStorage.setItem('nombre', 'Tony Manuel');

console.log(nombre);