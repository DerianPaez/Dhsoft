const menuIcon = document.getElementById('menu-icon')
const menuNav = document.getElementById('menu-nav')
const menuIconClose = document.getElementById('menu-icon-close')
const ancleList = document.querySelectorAll('#header-id a')

menuIcon.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav-active')
})

menuIconClose.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav-active')
})

ancleList.forEach(ancle => {
  ancle.addEventListener('click', () => {
    let isMenuActive = menuNav.classList.contains('menu-nav-active')
    if(isMenuActive) {
      menuNav.classList.remove('menu-nav-active')
    }
  })
})