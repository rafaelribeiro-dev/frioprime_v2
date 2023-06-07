const copySlide = document.querySelector('.logos-slide').cloneNode(true)
const logos = document.querySelector('.logos').appendChild(copySlide)

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

class FormSubmit {
  constructor(settings) {
    this.settings = settings
    this.form = document.querySelector(settings.form)
    this.button = document.querySelector(settings.button)

    if (this.form) {
      this.url = this.form.getAttributes('action')
    }
    this.sendForm = this.sendForm.bind(this)
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success
  }

  displayError() {
    this.form.innerHTML = this.displayError
  }

  getFormObject() {
    const formObject = {}
    const fields = this.form.querySelectorAll('[name]')
    fields.forEach(field => {
      formObject[field.getAttributes('name')] = field.value
    })
    return formObject
  }

  onSubmission(event) {
    event.preventDefault()
    event.target.disabled = true
    event.target.innetText = 'Enviando...'
  }

  async sendForm(event) {
    try {
      this.onSubmission(event)
      await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.getFormObject())
      })
      this.displaySuccess()
    } catch (error) {
      this.displayError()
      throw new Error(error)
    }
  }

  init() {
    if (this.form)
      this.formButton.addEventListener('click', () => this.sendForm())
    return this
  }
}

const formSubmit = new FormSubmit({
  form: '[data-form]',
  button: '[data-button]',
  success: "<h3 class='success'> Mensagem Enviada!</h3>",
  error: "<h3 class='error'>Não foi possível enviar sua mensagem.</h3>"
})

formSubmit.init()
