(function () {

    var formulario = document.getElementsByName('formulario')[0],

    elementos = formulario.elements,

    boton = document.getElementById('btn');

    var validarnombre = function(e){
        if (formulario.nombre.value == 0) {
         alert("Deber Completar el campo nombre");
         e.preventDefault();
        }
     };

     var validarapellido = function(e){
        if (formulario.apellido.value == 0) {
         alert("Deber Completar el campo apellido");
         e.preventDefault();
        }
     };

     var validarcedula = function(e){
        if (formulario.cedula.value == 0) {
         alert("Deber Completar el campo cedula");
         e.preventDefault();
        }
     };

     var validaredad = function(e){
        if (formulario.edad.value == 0) {
         alert("Deber Completar el campo edad");
         e.preventDefault();
        }
     };

     var validardireccion = function(e){
        if (formulario.direccion.value == 0) {
         alert("Deber Completar el campo de direccion");
         e.preventDefault();
        }
     };

     var validaremail = function(e){
        if (formulario.email.value == 0) {
         alert("Deber Completar el campo de email");
         e.preventDefault();
        }
     };

     var validarcelular = function(e){
        if (formulario.celular.value == 0) {
         alert("Deber Completar el campo de celular");
         e.preventDefault();
        }
     };

     var validarocupacion = function(e){
        if (formulario.ocupacion.value == 0) {
         alert("Deber Completar el campo de ocupacion");
         e.preventDefault();
        }
     };

     var validarradio = function(e){
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
        } else {
         alert("Deber seleccionar el campo sexo");
         e.preventDefault();
        }
     };
    
     var validar = function(e){
        validarnombre(e);
        validarradio(e);
        validarapellido(e);
        validarcedula(e);
        validaredad(e);
        validardireccion(e);
        validaremail(e);
        validarcelular(e);
        validarocupacion(e);
        
     };

     formulario.addEventListener("submit", validar);
//llamada a funcion validar



    }())











