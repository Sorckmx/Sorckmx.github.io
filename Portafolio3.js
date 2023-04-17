let menuVisible = false;
//Función para que se muestre o se oculte el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function Seleccionar(){
    //se oculta el menu una vez se selecciona una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("C");
        habilidades[5].classList.add("SCRUM");
        habilidades[6].classList.add("Git");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("proactividad");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



//Creación de la funcionalidad para el apartado de contacto
/*
//Se definen las variables totales a utilizar en este JavaScript
let txtName = document.getElementById("name");
let txtEmail = document.getElementById("email");
let txtPhone = document.getElementById("phone");
let txtSubject = document.getElementById("subject");
let txtMessage = document.getElementById("message");
let btnSend = document.getElementById("sendMessage");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

//Listener acerca de los diferentes campos a rellenar en el formulario de contacto
txtName.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value.trim();

    txtEmail.addEventListener("blur", function (event) {
        event.preventDefault();
        txtEmail.value = txtEmail.value.trim();
    });

    txtPhone.addEventListener("blur", function (event) {
        event.preventDefault();
        txtTelefono.value = txtTelefono.value.trim();
    });

    txtSubject.addEventListener("blur", function (event) {
        event.preventDefault();
        txtSubject.value = txtSubject.value.trim();
    });
    
    txtMessage.addEventListener("blur", function (event) {
        event.preventDefault();
        txtMensaje.value = txtMensaje.value.trim();
    });
});

//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexName = (/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]{3,}$/);
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
const regexPhone = (/^[3-9\s]{1}[1-9\s]{1}[0-9\s]{8}$/);
const regexSubject = (/^[\s\S]{5,100}$/);
const regexMessage = (/^[\s\S]{5,150}$/);

// función para validar los diferentes errores que existen en los campos del formulario y agregarlos a la variable msgError
btnContacto.addEventListener("click", function (event) {
    event.preventDefault();
    let cont = 0;

    if (validarname(txtName.value)) {


    } else {
        console.log(msgError);
        cont += 1;
    }
    if (validarEmail(txtEmail.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarTelefono(txtPhone.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarSubject(txtSubject.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarMessage(txtMessage.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    //Alert insertado mediante la página sweet alert2
    if (cont > 0) {
        let htmlAlert = `<ul class = listaDeErrores> Tienes errores en los siguientes campos: ${msgError}</ul>`;
        Swal.fire({
            title: 'Se encuentran errores en los siguientes campos:',
            html: htmlAlert,
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200, 
            imageAlt: 'Custom image',
          })

        //Funcionalidad para qe se reinicie el contador cada vez que se muestre un error en el envío del formulario de contacto
        cont = 0;
        htmlAlert = "";
        msgError = "";

        //else que muestra los datos del error mediante las sugerencias
    } else {
        let sugerencias = "Nombre: " + txtName.value + "\nE-mail: " + txtEmail.value + "\nTeléfono: " + txtPhone.value + "\nAsunto: " + txtSubject.value + "\nMensaje: " + txtMessage.value;

        // Es donde se envía el correo mediante SMTPJS
       (
            message => Swal.fire("Correo enviado")
        )
    }

});
//Función para validar los datos del formulario con los mensajes que muestran los errores en formato de lista desordenada
function validarName(name) {
    if (regexName.test(name)) {
        return true;

    } else {
        msgError += "<li> Nombre No Válido</li>";
        return false;
    }
}

function validarEmail(email) {
    if (regexEmail.test(email)) {
        return true;


    } else {
        msgError += "<li>Email No Válido</li>";
        return false;
    }
}
function validarPhone(phone) {
    if (regexPhone.test(phone)) {
        return true;


    } else {
        msgError += '<li> Teléfono No Válido </li>';
        return false;
    }
}
function validarMessage(message) {
    if (regexMessage.test(message)) {
        return true;


    } else {
        msgError += " <li> Mensaje No Válido </li>";
        return false;
    }
}
function validarSucursal(subject) {
    if (regexSubject.test (subject)) {
        return true;


    } else {
        msgError += "<li> Escribe un asunto válido </li>";
        return false;
    }
}
*/
