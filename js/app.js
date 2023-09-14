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

    const changeColorLink = link => {
      link.classList.add('color-nav')
    }
    navLink.forEach(changeColorLink)
  } else {
    header.classList.remove('scroll-header')
    navToggleButton.classList.remove('nav-toggle-color')
    navLogo.classList.remove('nav-logo-color')

    const removeColorMenu = link => {
      link.classList.remove('color-nav')
    }
    navLink.forEach(removeColorMenu)
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
        }, 4000) // Aguarda 0,4 segundos após a transição antes de ocultar completamente
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

const toTopButton = document.querySelector('.scrollTop')

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav .nav-list a')

window.onscroll = function () {
  this.scrollY >= 1000
    ? toTopButton.classList.add('show')
    : toTopButton.classList.remove('show')

  sections.forEach(section => {
    let scroll = window.scrollY
    let offset = section.offsetTop - 150
    let height = section.offsetHeight
    let id = section.getAttribute('id')

    if (scroll >= offset && scroll < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        document
          .querySelector('.nav .nav-list a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
}

toTopButton.addEventListener('click', () => {
  scrollTo(0, 0)
})

// gsap.from('.nav-logo', {
//   y: -100,
//   opacity: 0,
//   delay: 0.5,
//   duration: 1.5,
//   ease: 'expo.out'
// })

let tl = gsap.timeline()

const navItems = document.querySelectorAll('.nav-item')
const time = 1

tl.from('.nav-logo', time, {
  y: -100,
  opacity: 0,
  ease: 'circ.out',
  delay: 1
})
  .from(
    navItems[0],
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )
  .from(
    navItems[1],
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )
  .from(
    navItems[2],
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )
  .from(
    navItems[3],
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )
  .from(
    navItems[4],
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )
  .from(
    '.ph-instagram-logo',
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.65'
  )

  .from(
    '.headline',
    time,
    {
      y: 100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=1.5'
  )
  .from(
    '.hero-text',
    time,
    {
      y: 100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=1.2'
  )
  .from(
    '.arrow-down',
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=.9'
  )
  .from(
    '',
    time,
    {
      y: -100,
      opacity: 0,
      ease: 'circ.out'
    },
    '-=1.5'
  )
