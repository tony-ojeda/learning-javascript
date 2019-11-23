// variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// listenes 
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar carrito"
    cursos.addEventListener('click', comprarCurso);

    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar el documento, mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

// funciones
// función que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();

    // Delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    };

    insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${curso.imagen}" width=100></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

// Elimina el curso del carrito
function eliminarCurso(e) {
    e.preventDefault();
    let curso;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // listaCursos.innerHTML = '';

    //forma rapida
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    return false;
}

// Almacena carrito en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;
    // Toma el valor de un areglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();
    // el curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Comprueba que hata elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    // comprobamos si hay algo en localStorage
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

// Imprime los cursos de local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach((curso) => {
        // construir template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width=100></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</td>
         `;
        listaCursos.appendChild(row);
    });
}