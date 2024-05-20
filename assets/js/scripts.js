const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const subject = document.getElementById("asunto");
const form = document.getElementById("form");
const campovacio = document.getElementById("campovacio");
const campovacioEmail = document.getElementById("campovacioEmail");
const campovacioAsunto = document.getElementById("campovacioAsunto");

//validacion de campos
form.addEventListener("submit", e=>{
    e.preventDefault();
    let warning1 = "";
    let warning2 = "";
    let warning3 = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.trim().length === 0){
        warning1 += `<p>campo vacío*</p>`;
        entrar = true;
    }
    if(email.value.trim().length === 0){
        warning2 += `<p>Correo electrónico invalido o el campo esta vacío*</p>`;
        entrar = true;
    } else if (!regexEmail.test(email.value)) {
        warning2 += `<p>Correo electrónico inválido</p>`;
        entrar = true;
    }
    if(asunto.value.trim().length === 0){
        warning3 += `<p>campo vacío*</p>`;
        entrar = true;
    }

    if(entrar){
        campovacio.innerHTML = warning1;
        campovacioEmail.innerHTML = warning2;
        campovacioAsunto.innerHTML = warning3;
    } else {
        // Envía el formulario si todos los campos son válidos
        form.submit();

        $(document).ready(function(){
            $("#boton").on("click",function(){
                $("#enviado").fadeIn("slow");
            });
            $("#botonCerrar").on("click",function(){
                $("#enviado").fadeOut("slow");
            });
        });
    }
});

