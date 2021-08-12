const menuIcon = document.getElementById('menu-icon')
const menuNav = document.getElementById('menu-nav')
const menuIconClose = document.getElementById('menu-icon-close')

menuIcon.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav-active')
})

menuIconClose.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav-active')
})