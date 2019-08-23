const enlace = document.createElement('a');

// agregamos una clase
enlace.className = 'enlace';
// añadir id
enlace.id = 'nuevo-id';
// añadir atributo href
enlace.setAttribute = 'Nuevo Enlace';
// Añadir texto
enlace.textContent = "Nuevo Enlace";
//enlace.appendChild(document.createTextNode('Nuevo Enlace'));

// Añadir al HTML
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);