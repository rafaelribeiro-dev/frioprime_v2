const navMenu = document.querySelector('.nav-menu')
const navToggle = document.querySelector('.nav-toggle')
const navClose = document.querySelector('.nav-close')
//mostra o menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
//esconde o menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
//obtem a referencia de todos os links do menu
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
)

const scrollHeader = () => {
  const navToggleButton = document.querySelector('.nav-toggle')
  const navLogo = document.querySelector('.nav-logo')
  const header = document.querySelector('.header')

  if (this.scrollY >= 18) {
    header.classList.add('scroll-header')
    navToggleButton.classList.add('nav-toggle-color')
    navLogo.classList.add('nav-logo-color')

    navLink.forEach(link => {
      link.classList.add('color-nav')
    })
  } else {
    header.classList.remove('scroll-header')
    navToggleButton.classList.remove('nav-toggle-color')
    navLogo.classList.remove('nav-logo-color')
    navLink.forEach(link => {
      link.classList.remove('color-nav')
    })
  }
}
document.addEventListener('scroll', scrollHeader)

const baseDate = 2001

const showServiceYears = year => {
  const yearsCount = document.querySelector('[data-js="yearsCount"]')

  const date = new Date()

  yearsCount.textContent = date.getFullYear() - year
}

showServiceYears(baseDate)

function setInputBudget() {
  const input = document.getElementById('assunto')
  input.value = 'Solicito Orçamento'
}

const copySlide = document.querySelector('.logos-slide').cloneNode(true)
const logos = document.querySelector('.logos').appendChild(copySlide)

function handleSubmit(event) {
  const success = document.querySelector('.success')
  const warning = document.querySelector('.warning')
  event.preventDefault() // Impede o envio do formulário padrão

  // Obtém os dados do formulário
  var form = event.target
  var formData = new FormData(form)

  // Envia os dados do formulário usando Fetch API
  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then(function (response) {
      if (form.target.value === '') {
        warning.classList.add('active')
      }
      // Exibe a mensagem de sucesso ou erro
      if (response.ok) {
        success.style.opacity = 1
        success.classList.add('active')

        setTimeout(() => {
          success.innerText = 'Mensagem enviada, Obrigado!'
        }, 2000)

        setTimeout(function () {
          success.style.opacity = 0
          success.classList.remove('active')
          form.reset()
        }, 4000) // Aguarda 0,5 segundos após a transição antes de ocultar completamente
      } else {
        warning.style.display = 'block'
      }
    })
    .catch(function (error) {
      // Exibe a mensagem de erro
      warning.style.display = 'block'
      warning.innerText = error
    })

  return false // Impede o envio do formulário padrão
}
