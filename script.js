
window.onload = () => {
    const btn = document.getElementById('btn');
    const arrayElementosButton = document.getElementById('texto');
    const itemABorrarButton = document.getElementById('item');

    btn.addEventListener('click', function(){
        let arrayElementos = arrayElementosButton.value.split(',');
        let itemABorrar = itemABorrarButton.value;
        removeFromArray(arrayElementos, itemABorrar);
    });
}
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