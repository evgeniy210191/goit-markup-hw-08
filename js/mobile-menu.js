const [nav] = ['button-nav']
.map(item => document.getElementById(item))

nav.onclick = function (event) {
    nav.classList.toggle('is-open')
}
