// toggle menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// click menu links
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// header scroll shadow
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener("scroll", function(){
  if (window.scrollY >= navHeight){
    // scroll is higher than header
    header.classList.add("scroll")
  }else{
    // scroll is smaller than header
    header.classList.remove("scroll")
  }
})

// swiper carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});