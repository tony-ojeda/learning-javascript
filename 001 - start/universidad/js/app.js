// selección multiple con querySelector
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');
enlaces.forEach(function(impares) {
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
});

console.log(enlaces);