import IMask from 'imask'

// vars declaration

const appointmentForm = document.querySelector('.appointment-form')
const referral = document.getElementById('referral')
const name = document.getElementById('name')
const email = document.getElementById('email')
const doctor = document.getElementById('doctor')
const tel = document.getElementById('tel')
const date = document.getElementById('date')

// phone mask

const mask = new IMask(tel, {
  mask: '+7 (000)000-00-00',
  lazy: false
})

// validation itself

let appointmentFails = []

appointmentForm.addEventListener('submit', e => {
  e.preventDefault()

  const makeError = (elString, message) => {
    let label = document.querySelector(`label[for="${elString}"]`)
    label.textContent = message

    document.getElementById(elString).classList.add('wrong')
    label.classList.add('wrong')

    // avoid duplicates

    if (!appointmentFails.includes(elString)) {
      appointmentFails.push(elString)
    }
  }

  const removeError = (elString, message) => {
    let label = document.querySelector(`label[for="${elString}"]`)
    label.textContent = message

    document.getElementById(elString).classList.remove('wrong')
    label.classList.remove('wrong')

    for (let i in appointmentFails) {
      if (appointmentFails[i] === elString) {
        appointmentFails.splice(i, 1)
        break
      }
    }
  }

  if (referral.value === '-выбрать-') {
    makeError('referral', 'Выберите направление.')
  }

  if (referral.value !== '-выбрать-') {
    removeError('referral', 'Выбрано направление!')
  }

  if (doctor.value === '-выбрать-') {
    makeError('doctor', 'Выберите доктора.')
  }

  if (doctor.value !== '-выбрать-') {
    removeError('doctor', 'Выбран доктор!')
  }

  let telRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  let isTelRegExpRight = telRegExp.test(tel.value)

  if (!isTelRegExpRight) {
    makeError('tel', 'Введите корректный номер телефона.')
  }

  if (isTelRegExpRight) {
    removeError('tel', 'Корректный номер телефона!')
  }

  let today = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
  let isDateWrong = Date.parse(date.value) < Date.parse(today)

  if (isDateWrong) {
    makeError('date', 'Выберите текущую или более позднюю дату.')
  }

  if (!isDateWrong) {
    removeError('date', 'Выбрана верная дата!')
  }

  if (appointmentFails.length !== 0) {
    return false
  }

  if (appointmentFails.length === 0) {
    // send data here
  }
})
