function miPrimerArray(arr) {
    console.log(arr[0])
}

function imPrimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imPrimirElementoPorElemento(["luis", "oscar", "leilani", "nesla", "gerardo"])


const obj = {
    nombre: "luis",
    edad: 22,
    ciudad: "veracruz"
}

Object.values(obj)

function imPrimirElementoPorElemento(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}


