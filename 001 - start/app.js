// template lirerals
const producto1 = 'Pizza',
    precio1 = 30,
    producto2 = 'Hamburguesa',
    precio2 = 40;

let html;

// forma antigua
// html = '<ul>' +
//     '<li>Order: ' + producto1 + '</li>' +
//     '<li>Precio: ' + precio1 + '</li>' +
//     '<li>Orden: ' + producto2 + '</li>' +
//     '<li>Precio: ' + precio2 + '</li>' +
//     '</ul>';

// forma nueva
html = `
       <ul>
        <li> Order: ${producto1} </li>
        <li> Precio: ${precio1} </li>
        <li> Orden: ${producto2} </li>
        <li> Precio: ${precio2} </li>
        <li> Total: ${total(precio1,precio2)} </li>
       </ul>
       `;

function total(precio1, precio2) {
    return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;