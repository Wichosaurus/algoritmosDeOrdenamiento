function generarNumerosAleatorios(cantidad, min = 0, max = 10000) {
    let numerosAleatorios = []; // [] representa el array
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero); //inserta los numeros al array
    }
    return numerosAleatorios; // genera el array con los numeros generados
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

let numeros = generarNumerosAleatorios(10000); //cantidad de numeros a mostrar

console.log(numeros);

console.time("Merge Sort");
let numerosOrdenados = mergeSort(numeros);
console.timeEnd("Merge Sort");

console.log(numerosOrdenados);