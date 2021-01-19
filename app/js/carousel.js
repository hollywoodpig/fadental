import Siema from 'siema'

const siema = new Siema({
  selector: '.carousel',
  duration: 300,
  easing: 'ease',
  perPage: {
    768: 1,
    1024: 3
  },
  threshold: 20,
  loop: true
})

const carouselBtnLeft = document.querySelector('.carousel-button.left')
const carouselBtnRight = document.querySelector('.carousel-button.right')

carouselBtnLeft.addEventListener('click', e => {
  e.preventDefault()
  siema.prev()
})

carouselBtnRight.addEventListener('click', e => {
  e.preventDefault()
  siema.next()
})
