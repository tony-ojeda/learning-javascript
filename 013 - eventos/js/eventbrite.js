class EventBrite {
    constructor() {
        this.token_auth = 'UQ6CZBJV5VHTLJK7VF6R';
        this.ordenar = 'date';
    }

    // obtiene las categorias en init()
    async obtenerCategorias() {
        // consultar las categorias a la rest api del event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // esperar las respuestas de las categorias y devolver JSON
        const categorias = await respuestaCategorias.json();

        // devolvemos resultados
        return {
            categorias
        }
    }
}
0