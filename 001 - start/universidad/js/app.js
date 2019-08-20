// query selector
// usas la misma sinstaxis de css
// Tambien puede seleccionar clases, de devuelve la primera clase que encuentra

const encabezado = document.querySelector('#encabezado');

// Aplicar CSS
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';

console.log(encabezado);