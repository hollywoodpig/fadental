import {CountUp} from 'countup.js'

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect()

  return rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
}

const counterOptions = {
  duration: 6,
  separator: ''
}

const scrollTo = document.querySelector('.why-us')

let isVisible

function isVisibleHandler() {
  isVisible = isElementInViewport(scrollTo)

  if (isVisible) {
    const qualityCounter = new CountUp('quality-counter', 100, counterOptions).start()
    const patientsCounter = new CountUp('patients-counter', 5000, counterOptions).start()
    const employeeCounter = new CountUp('employee-counter', 5, counterOptions).start()
    const yearsCounter = new CountUp('years-counter', 15, counterOptions).start()
    const smilesCounter = new CountUp('smiles-counter', 5000, counterOptions).start()

    window.removeEventListener('scroll', isVisibleHandler)
  }
}

window.addEventListener('scroll', isVisibleHandler)
