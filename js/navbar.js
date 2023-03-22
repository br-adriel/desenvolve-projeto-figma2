/* Controla exibição do menu de navegação em telas pequenas */
const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar-menu');
const navbar = document.getElementById('navbar');

btnAbrirMenu.addEventListener('click', (e) => {
  navbar.classList.add('open');
  navbar.classList.remove('closed');
});

btnFecharMenu.addEventListener('click', (e) => {
  navbar.classList.add('closed');
  navbar.classList.remove('open');

  setTimeout(300, () => {
    navbar.classList.remove('closed');
  });
});
