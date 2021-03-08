const form = document.getElementById('form')
const button = document.getElementById('button')
const infoerror = document.querySelectorAll('.input__error')
const email = document.getElementById('email')
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e) => e.preventDefault())

button.addEventListener('click', () => {
  const data = document.querySelectorAll('.main__input')
  data.forEach(item => {
    if (item.value === '' && !emailRegex.test(email.value)) {
      item.classList.add('main__input--error')
      infoerror[0].classList.add('input__error--show')
      infoerror[1].classList.add('input__error--show')
      infoerror[2].classList.add('input__error--show')
      infoerror[3].classList.add('input__error--show')
    } else {
      item.value = ''
      item.classList.remove('main__input--error')
      infoerror[0].classList.remove('input__error--show')
      infoerror[1].classList.remove('input__error--show')
      infoerror[2].classList.remove('input__error--show')
      infoerror[3].classList.remove('input__error--show')
    }
  })
})