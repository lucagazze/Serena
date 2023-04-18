$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('nav').addClass('scrolled');
      } else {
        $('nav').removeClass('scrolled');
      }
    });
  });
  $(window).scroll(function() {
    $('.card').each(function() {
        var cardPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (cardPos < topOfWindow + 600) {
            $(this).addClass("show");
        }
    });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  })
  
  /* Código para activar el popover de Bootstrap */
  $(function () {
  $('[data-toggle="popover"]').popover()
  })
 
//Para que se cierre el menu desplegable solo
  const menu = document.querySelector('#navbarSupportedContent');
const menuLinks = document.querySelectorAll('.nav-link');

function cerrarMenu() {
  menu.classList.remove('show');
}

menuLinks.forEach(link => {
  link.addEventListener('click', cerrarMenu);
});
