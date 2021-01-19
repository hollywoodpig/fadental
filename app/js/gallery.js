const $modal = document.createElement('div')
$modal.className = 'modal-wrapper'
$modal.innerHTML = `
  <div class="overlay"></div>
  <div class="modal"></div>
`
document.body.appendChild($modal)

const photos = document.querySelectorAll('[data-selectable]')
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = modalWrapper.querySelector('.modal')
const overlay = modalWrapper.querySelector('.overlay')

photos.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.add('no-scroll')

    const img = item.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')

    const $img = document.createElement('img')
    $img.setAttribute('src', src)
    $img.setAttribute('alt', alt)

    modalWrapper.classList.add('active')
    modal.innerHTML = ''
    modal.appendChild($img)
  })
})

overlay.addEventListener('click', () => {
  document.body.classList.remove('no-scroll')
  modalWrapper.classList.remove('active')
})
