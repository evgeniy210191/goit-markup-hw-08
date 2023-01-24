const [backdrop, hidden, open_modal, modal] = ['backdrop', 'close', 'open_modal', 'modal']
.map(item => document.getElementById(item))

hidden.onclick = function (event) {
  if (!backdrop.classList.contains('is-hidden')) {
    backdrop.classList.add('is-hidden')
    modal.classList.add('is-hidden')
  }
}

open_modal.onclick = function (event) {
  if (backdrop.classList.contains('is-hidden')) {
    backdrop.classList.remove('is-hidden')
    modal.classList.remove('is-hidden')
  }
}