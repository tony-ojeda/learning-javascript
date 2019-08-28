/** -------------------  Variables  -----------------------   */
const listaTweets = document.getElementById('lista-tweets');
// const listaTweets = document.querySelector('#lista-tweets');



/**  ------------------  Event Listeners  -----------------  */
eventListeners();

function eventListeners() {
    // cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


/**  ------------------  Funciones  ----------------------- */
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault(); // evita que el atributo action,href por defecto se active
    // leer el varlo del textarea
    const tweet = document.getElementById('tweet').value;

    // crear boton eleminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el botón de borrar a la lista
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);
}