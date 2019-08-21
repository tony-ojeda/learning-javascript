// Traversing  Padre - Hijo
// Nos permite recorrer todo los nodos del DOM (adelante, atras, saltos)

const barra = document.querySelector('barra');
console.log(barra.children[0].children[0].children);

// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = Documentos
// 10 = Doctype