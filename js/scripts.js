//imagen aparece por un lado
$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('#fotoCafe').offset().top - $(window).innerHeight() * .6;

  if (scrollUsuario > profundidad) {

    $('#fotoCafe').addClass('visible');
  }

});

$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('.alinear').offset().top - $(window).innerHeight() * .6;

  if (scrollUsuario > profundidad) {

    $('.alinear').addClass('visible');
  }

});



$(document).ready(function(){



  //desciende con barra de menu
$('.desplazar').on('click', function(){

  let id = $(this).data('nivel');     
  let profundidad = $(id).offset().top;

  $('html').animate({
    scrollTop: profundidad
  }, 1000);

});

//menu responsive
    $('.barras').on('click', muestraMenu);
    $('#cerrar').on('click', muestraMenu);
    $('.activar').on('click', muestraMenu);



      function muestraMenu() {
      $('#menu').toggleClass('abierto');
    }


});


//animacion en casacada ojo lateral, incluir scroll y hacer vertical
   /*$("div").each(function(i){
        var el = $(this);
        setTimeout(function(){
        el.animate({left: "+=200"}, {duration: 3000, queue: false})
                .delay(2500).animate({opacity: 0}, {duration: 500});
        },i*1000);
    });*/



//validacion formulario
function validacion() {

  let nombre = document.getElementById("campoNombre").value;
  let telefono = document.getElementById("campoTelefono").value;
  let email = document.getElementById("campoEmail").value;
  let mensaje = document.getElementById("campoMensaje").value;
 

  if (nombre === null || telefono === null  ||  email === null || mensaje === null) {

            msg("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;

      } else {

            if (/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre)) {

                  msg("El campo 'Nombre' no es correcto. Es obligatorio y de mínimo 2 letras", 5000);
                  return false;
            }

            else if (!/^\d{9}$/.test(telefono)) {

                  msg("El campo 'Teléfono' no es correcto. Es obligatorio, y el formato debe ser 000000000", 5000);
                  return false;

            }


            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  msg("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'");
                  return false;

            }

            else {

                  return true;
            }
      }
}



function msg(par1, par2 = 2000) {

      document.getElementById('mensaje').innerHTML = par1;

      document.getElementById('alerta').classList.add('visible');

      setTimeout( function(){
            document.getElementById('alerta').classList.remove('visible');
      }, par2);

}




