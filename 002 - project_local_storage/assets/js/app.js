// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado 
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault(); // evita que se ejecute el atributo action por defecto del formulario
    // leer el valor del texarea
    const tweet = document.getElementById('tweet').value;

    // Crear boton de elminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadir el elemento a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el boton borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);

}

// Elimina el Tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach((tweet) => {
        // Crear boton de elminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // Crear elemento y añadir el elemento a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // añade el boton borrar al tweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listaTweets.appendChild(li);
    });
}

// Agrega tweet a local storageS
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    // Añadir el nuevo tweet
    tweets.push(tweet);

    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos los valores de local Storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Elminar tweet de local storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    // Elimina la X del Tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet, index) => {
        if (tweetBorrar === tweet)  tweets.splice(index, 1);                
    });        

    localStorage.setItem('tweets', JSON.stringify(tweets));
}