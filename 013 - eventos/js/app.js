// instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador
document.getElementById('buscarBtn').addEventListener('click', e => {
    e.preventDefault();

    // leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    // revisar que haya algo escrito en el buscador
    if (textoBuscador !== '') {
        console.log('Buscando');
    } else {
        console.log('no hay nada');
    }
})