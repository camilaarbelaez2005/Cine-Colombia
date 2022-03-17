let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){

    if(evento.target.classList.contains("img-fluid")){
        evento.target.src="img/cinema2.png"
    }
 
})