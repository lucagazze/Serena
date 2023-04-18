// Seleccionamos los elementos HTML que necesitamos
const cardContainer = document.getElementById('card-container');
const pagination = document.getElementById('pagination');

// Configuramos los datos
const cards = cardContainer.children;
const cardsPerPage = 4;
const pageCount = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

// Función para mostrar las tarjetas de la página actual
function showCards() {
  // Calculamos los índices de las tarjetas que deben mostrarse
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Mostramos las tarjetas adecuadas y ocultamos las demás
  for (let i = 0; i < cards.length; i++) {
    if (i >= startIndex && i < endIndex) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

// Función para activar/desactivar los enlaces de paginación según sea necesario
function updatePagination() {
  // Eliminamos los enlaces de paginación actuales
  pagination.innerHTML = '';

  // Creamos los enlaces de paginación para cada página
  for (let i = 1; i <= pageCount; i++) {
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.textContent = i;

    if (i === currentPage) {
      pageLink.classList.add('active');
    } else {
      pageLink.href = '#';
      pageLink.addEventListener('click', () => {
        currentPage = i;
        showCards();
        updatePagination();
      });
    }

    pagination.appendChild(pageLink);
  }
}

// Mostramos las tarjetas de la página inicial
showCards();
updatePagination();


window.onload = function() {
  window.scrollTo(1, 1);
}
$(window).scroll(function() {
  $('.card').each(function() {
      var cardPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (cardPos < topOfWindow + 600) {
          $(this).addClass("show");
      }
  });
});


