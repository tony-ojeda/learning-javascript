class Cotizador {
    // obtiene todo el json con las criptomonedas
    async obtenerMonedasAPI() {
        // fetch la API
        const urlObtenerMonedas = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        // respuesta en JSON de las monedas 
        const monedas = await urlObtenerMonedas.json();

        return { monedas }
    }

    async obtenerValores(moneda, criptomoneda) {
        // convierte los selets en la URL
        const urlConvertir = await fetch(`http://api.coinmarketcap.com/v1/ticker/${criptomoneda}/convert=${criptomoneda}`);
        const resultado = await urlConvertir.json();

        return {
            resultado
        }
    }
}