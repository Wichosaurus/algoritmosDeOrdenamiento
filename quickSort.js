function generarNumerosAleatorios(cantidad, min = 0, max = 10000) {
    let numerosAleatorios = []; // [] representa el array
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero); //inserta los numeros al array
    }
    return numerosAleatorios; // genera el array con los numeros generados
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let numeros = generarNumerosAleatorios(10000); //cantidad de numeros a mostrar

console.log(numeros);

console.time("Quick Sort");
let numerosOrdenados = quickSort(numeros);
console.timeEnd("Quick Sort");

console.log(numerosOrdenados);