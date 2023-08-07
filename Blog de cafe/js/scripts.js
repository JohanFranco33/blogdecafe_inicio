// queryselector

const heading = document.querySelector(".header__texto h2") // retorna 0 o 1 elementos
console.log(heading)

//queryselectorall

const enlaces = document.querySelectorAll(".navegacion a")


//enlaces[0].textContent = "nuevo texto enlace"
//enlaces[0].href = https://google.com.co
//enlaces[0].classList.add("nueva clase")
// enlaces[0].classList.remove("navegacion__enlace")



//getelementbyid


// const heading2 = document.getElementById("heading")
// console.log(heading2)


//generar  nuevo enlace


const nuevoenlace = document.createElement("A")

//AGREGAR  HREF

nuevoenlace.href = "nuevo-enlace.html";
//AGREGAR TEXTO

nuevoenlace.textContent = "nuevo enlace";
//AGREGAR ENLACE

nuevoenlace.classList.add("navegacion__enlace")

//agregar al document

const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoenlace)

console.log(nuevoenlace)














//eventos

console.log(1)

window.addEventListener("load", function () { //load  espera a  que  se ejecute  todo y despues se ejecuta el 
    console.log(2)
});
window.onload = function () {
    console.log(3)
}

document.addEventListener("DOMContentLoaded", function () {
    console.log(4) // solo espera  a que se descargue el html
})

console.log(5)


window.onscroll = function (evento) {
    console.log(evento)
}





//seleccionar  elementro y realizar funciones 

// const botonenviar = document.querySelector(".boton--primario");
// botonenviar.addEventListener("click", function (evento) {
//     console.log(evento.target);
//     evento.preventDefault();

//     //validar  formulario
//     console.log("mostrando formulario");
// })



//eventos  de  imput  y textarea  
const datos = {
    nombre: "",
    email: "",
    mensaje: ""

}



const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leertexto)

email.addEventListener("input", leertexto)
mensaje.addEventListener("input", leertexto)

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    //validar  formulario


    const { nombre, email, mensaje } = datos;

    if (nombre == "" || email == "" || mensaje == "") {
        mostraralerta("todos  los campos son obligatoris ", true)
        return;
    } else {
        mostraralerta("se  ha enviado con exito  ")
        return;
    }

    //enviar  formulario 
    console.log("enviar  formulario")



});



function leertexto(e) {

    datos[e.target.id] = e.target.value;
    // console.log(e.target)
    // console.log(datos)
}

//el evento  submit




function mostraralerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error")
    } else {
        alerta.classList.add("exito")
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        exito.remove();
    }, 5000)
}




//muestra error

function mostrarerror(mensaje) {
    const error = document.createElement("P")
    error.textContent = mensaje;




    //desaparecer  errro 5 seg


    setTimeout(() => {
        error.remove();
    }, 5000)


}

function exito(mensaje) {
    const exito = document.createElement("P")
    exito.textContent = mensaje;




    //desaparecer  errro 5 seg


    setTimeout(() => {
        exito.remove();
    }, 5000)


}



