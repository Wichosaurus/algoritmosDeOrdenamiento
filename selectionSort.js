function generarNumerosAleatorios(cantidad, min = 0, max = 10000) {
    let numerosAleatorios = []; // [] representa el array
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero); //inserta los numeros al array
    }
    return numerosAleatorios; // genera el array con los numeros generados
}

function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

let numeros = generarNumerosAleatorios(10000); //cantidad de numeros a mostrar

console.log(numeros);

console.time("Selection Sort");
let numerosOrdenados = selectionSort(numeros);
console.timeEnd("Selection Sort");

console.log(numerosOrdenados);