function generarNumerosAleatorios(cantidad, min = 0, max = 10000) {
    let numerosAleatorios = []; // [] representa el array
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero); //inserta los numeros al array
    }
    return numerosAleatorios; // genera el array con los numeros generados
}

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let numeros = generarNumerosAleatorios(10000); //cantidad de numeros a mostrar

console.log(numeros);

console.time("Bubble Sort");
let numerosOrdenados = bubbleSort(numeros);
console.timeEnd("Bubble Sort");

console.log(numerosOrdenados);