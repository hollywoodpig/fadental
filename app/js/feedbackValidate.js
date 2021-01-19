import IMask from 'imask';

const feedBackForm = document.querySelector('.feedback-form')
const name = document.getElementById('feedback-name')
const tel = document.getElementById('feeback-tel')

const mask = new IMask(tel, {
  mask: '+7 (000)000-00-00',
  lazy: false
})

// validation itself

feedBackForm.addEventListener('submit', e => {
  e.preventDefault()

  let telRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  let isTelRegExpRight = telRegExp.test(tel.value)

  if (isTelRegExpRight) {
    // send data
  }
})
