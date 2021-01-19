import Swiper, {Pagination, Autoplay} from 'swiper'

Swiper.use([Pagination, Autoplay])

const swiper = new Swiper('.slider-container', {
  pagination: {
    el: '.slider-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}"></span>`
    }
  },
  autoplay: {
    delay: 5000
  },
  loop: true
})

const swiperPrev = document.getElementById('swiper-prev')
const swiperNext = document.getElementById('swiper-next')

swiperPrev.addEventListener('click', e => {
  e.preventDefault()
  swiper.slidePrev()
})

swiperNext.addEventListener('click', e => {
  e.preventDefault()
  swiper.slideNext()
})
