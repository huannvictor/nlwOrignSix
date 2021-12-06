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
function changeHeaderScrolled() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    // scroll is higher than header
    header.classList.add('scroll')
  } else {
    // scroll is smaller than header
    header.classList.remove('scroll')
  }
}

// swiper carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header,#testimonials .testimonials,
  #contact .text, #contact .info,
  footer, .brand, .social
  `,
  { interval: 50 }
)

// button back to top
function backToTop() {
  const backToTopButton = document.querySelector('#button')
  const page = document.querySelector('body')
  const pageHeight = (page.offsetHeight / 100) * 5

  if (window.scrollY >= pageHeight) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// execute functions

window.addEventListener('scroll', function () {
  changeHeaderScrolled()
  backToTop()
})
