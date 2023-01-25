const [nav, closeMenu] = ['button-nav', 'cont']
.map(item => document.getElementById(item))

nav.onclick = function (event) {
  nav.classList.toggle('is-open');
  document.querySelector('body').classList.toggle('hidden')
}
closeMenu.onclick = function (event) {
  nav.classList.remove('is-open');
  document.querySelector('body').classList.remove('hidden')
};