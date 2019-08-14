// objetos en js
const persona = {
    nombre: 'Tony',
    apellido: 'Ojeda',
    edad: 10,
    guapo: true,
    profesion: 'Ingeniero Software',
    email: 'tojeda96@gmail.com',
    amigos: ['saul', 'ludwin', 'inga', 'conde'],
    hogar: { ciudad: 'Tocache', pais: 'Perú' },
    nacimiento: function() {
        return new Date().getFullYear() - 23;
    }
};

//persona.amigos.push('david');
//console.dir(persona.nacimiento());

const autos = [
    { modelo: 'Mustang', motor: 6.2 },
    { modelo: 'Camaro', motor: 6.1 },
    { modelo: 'Challenger', motor: 6.3 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`Mis autos son: ${autos[i].modelo}`);
}

console.dir(autos);