# LEARNING - JAVASCRIPT

these are some of the most used methods

## MAP
Ejemplo:

Supongamos que ha recibido una matriz que contiene varios objetos, cada uno de los cuales representa a una persona. Sin embargo, lo que realmente necesita al final es una matriz que contenga solo la identificación de cada persona
```js
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]
```
Using `.forEach()`:
```js
var officersIds = [];

officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

console.log(officersIds);  // we obtains [20, 24, 56, 88]
```
using `.map()`:
```js
var officersIds = officers.map(function (officer) {
  return officer.id
});

console.log(officersIds);  // we obtains [20, 24, 56, 88]
```
something much better using **ES6 support**:
```js
var officersIds = officers.map(officer => officer.id);

console.log(officersIds);  // we obtains [20, 24, 56, 88]
```
## REDUCE

## FILTER

## ENLACES
[Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
[Learn & Understand JavaScript’s Reduce Function](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc)
[JavaScript — Learn to Chain Map, Filter, and Reduce](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)
[Map, Filter and Reduce – Animated](https://medium.com/@js_tut/map-filter-and-reduce-animated-7fe391a35a47)
[How JavaScript’s Reduce method works, when to use it, and some of the cool things it can do](https://medium.com/free-code-camp/reduce-f47a7da511a9)
