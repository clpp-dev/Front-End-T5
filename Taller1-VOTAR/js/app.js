const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const boton = document.querySelector("#btn-enviar");
const mensaje = document.querySelector("#mensaje");
const fecNac = document.querySelector("#fecnac")
const iconoexito = document.querySelector("#iconoexito")
const iconoerror = document.querySelector("#iconoerror")

boton.addEventListener('click', ValidarVoto)
edad.addEventListener('keydown', TeclaEnter)
fecNac.addEventListener('change', CalcularConFechaNac)

function ValidarVoto(){
    let nomUsuario= nombre.value;
    let edadUsuario= edad.value;
    if (edadUsuario >= 18){
        iconoerror.classList.remove('activo')
        iconoerror.classList.add('oculto')
        iconoexito.classList.remove('oculto')
        iconoexito.classList.add('activo')
        mensaje.textContent  = `Señor ${nomUsuario}, Puede votar su edad es ${edadUsuario}`
    }
    else{
        iconoexito.classList.remove('activo')
        iconoexito.classList.add('oculto')
        iconoerror.classList.remove('oculto')
        iconoerror.classList.add('activo')
        mensaje.textContent  = `Señor ${nomUsuario}, No puede votar su edad es ${edadUsuario}`
    }
    
}

function TeclaEnter(e){
    let tecla = e.keyCode
    if (tecla == 13){
        ValidarVoto();
    }
}

//Funcion alternativa con oprador ternario para Enter
function Enter(e){
    let tecla = e.keyCode
    let validacion = tecla == 13 ? ValidarVoto() : "Hola"
}

function CalcularConFechaNac(e){
    e.preventDefault()
    let fechaNacUsuario = fecnac.value;
    fechaNacUsuario = fechaNacUsuario.split("-")

    let date = new Date()
    let diaActual = date.getDate()
    let mesActual = date.getMonth()
    let annioActual =  date.getFullYear()

    let diasUsuario =  diaActual - fechaNacUsuario[2]
    let mesUsuario =  mesActual - fechaNacUsuario[1]
    let anniosUsuario = annioActual - fechaNacUsuario[0]

    if (anniosUsuario >= 18){
        edad.setAttribute('value', `${anniosUsuario}`)
        ValidarVoto();
    }
    else{
        edad.setAttribute('value', `${anniosUsuario}`)
        ValidarVoto();
    }
    console.log("Dias: " + diasUsuario,"\nMeses: " + mesUsuario, "\nannios: " + anniosUsuario) // Este Console Log es para saber si estan bien los parametros de la fecha
}

