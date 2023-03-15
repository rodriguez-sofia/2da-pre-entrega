let carritoDeCompras = parseInt(prompt("elija el prodructo que desea llevar", "", "1:cafe", "", "2:azucar", "", "3:harina", "", "4:galletitas"))
const productos = [{ nombre: "cafe", precio: 150 }, { nombre: "choco", precio: 200 }, { nombre: "harina", precio: 400 }, {
    nombre: "ñoquis", precio: 400
}]

const getName = (numero) => {
    switch (numero) {
        case 1:
            return "cafe"
        case 2:
            return "choco"
        case 3:
            return "harina"
        case 4:
            return "ñoquis"

    }
}

let suma = 0
while (carritoDeCompras != 0) {

    const productName = getName(carritoDeCompras)

    const productoSeleccionado = productos.find(p => p.nombre === productName)

    suma += productoSeleccionado.precio

    carritoDeCompras = parseInt(prompt("elija el prodructo que desea llevar", "", "1:cafe", "", "2:azucar", "", "3:harina", "", "4:galletitas"))
}

alert(suma)