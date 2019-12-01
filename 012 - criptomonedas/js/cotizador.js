class Cotizador {
    // obtiene todo el json con las criptomonedas
    async obtenerMonedasAPI() {
        // fetch la API
        const urlObtenerMonedas = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        // respuesta en JSON de las monedas 
        const monedas = await urlObtenerMonedas.json();

        return { monedas }
    }
}