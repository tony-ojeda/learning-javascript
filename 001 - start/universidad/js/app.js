// Event Listener click in js
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(evento) {
    evento.preventDefault();
    let elemento;
    elemento = evento;
    elemento = evento.target;
    elemento = evento.target.id;
    elemento = evento.target.className;
    elemento = evento.target.innerText;
    console.log(elemento);
}