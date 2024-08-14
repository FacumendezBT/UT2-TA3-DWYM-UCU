
let btn = document.getElementById('btn');
let arrayElementos = document.getElementById('texto').value.split(',');
let itemABorrar = document.getElementById('item').value;

btn.addEventListener('click', function(){
    arrayElementos = document.getElementById('texto').value.split(',');
    itemABorrar = document.getElementById('item').value;
    removeFromArray(arrayElementos, itemABorrar);
});

/**
 * Función que recibe un array de elementos y un elemento a borrar
 * e imprime el array sin el elemento a borrar
 * @param {Array} arrayElementos - Array de elementos
 * @param {String} itemABorrar - Elemento a borrar del array
 */
function removeFromArray(arrayElementos, itemABorrar){
    console.log(arrayElementos, itemABorrar);
    let newArray = arrayElementos.filter(item => item !== itemABorrar);
    console.log(newArray);
}