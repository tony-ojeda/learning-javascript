// Métodos de propiedad
// Cuando una función se pone dentro de un objeto

const musica = {
    reproducir: function() {
        console.log(`Repoduciendo Música`);
    },
    pausar: function() {
        console.log(`Pause a la música`);
    }
}

musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID: ${id}`);
}
musica.borrar();