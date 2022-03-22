let contenedor = document.getElementById("contenedor")
contenedor.addEventListener("click", function (evento) {

    if (evento.target.classList.contains("img-fluid")) {
        evento.target.src = "img/cinema2.png"
    }

})

let boton = document.getElementById("Boton")
boton.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("hizo click")
    let pelicula = document.getElementById("Pelicula").value;
    console.log(pelicula)
    let cantidad = document.getElementById("Cantidad").value;
    console.log(cantidad)
    let asiento = document.getElementById("Asiento").value;
    console.log(asiento)
    let correo = document.getElementById("Correo").value;
    console.log(correo)

    let preferencial = 12500;
    let general = 9000;
    console.log(asiento)
    if (asiento == "Preferencial") {
        let resultado = cantidad * preferencial
        alert("Su total es: " + resultado)
    }
    else (asiento == "General")
    let resultado2 = cantidad * general
    alert("Su total es: " + resultado2)
}

