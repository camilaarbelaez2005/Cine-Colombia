let boton= document.getElementById("comprar boletas");
boton.addEventListener("click", escuchar);
function escuchar (event){
    event.preventDefault()
    console.log("Compro boletas")
}