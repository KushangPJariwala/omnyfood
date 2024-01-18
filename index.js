let btn = document.querySelector ('.btn-mobile-nav');
btn.addEventListener ('click', e => {
  document.querySelector ('header').classList.toggle ('mobile-nav');
});
