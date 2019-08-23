// Reemplazar elementos
const nuevoEncabezado = document.createElement('h2');

// agregar un id
nuevoEncabezado.id = 'encabezado';

// agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

// Elemento anterior (sera reemplazado)
const anterior = document.querySelector('#encabezado');

// Elemento padre
const elPadre = document.querySelector('#lista-cursos');

// Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);